import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import { View, Alert, ImageBackground, ImagePickerIOS } from "react-native";
import { RNCamera } from "react-native-tflite-camera";
import GenButton from "../Shared/genButton";
import Tflite from "tflite-react-native";
import ImagePicker from "react-native-image-picker";
import { Platform } from "react-native";

const ScannerScreen = (props: any) => {

    const [popupShown, setPopupShown] = useState<any>(false);
    const [camera, setCamera] = useState<any>(undefined);
    const [inference, setInference] = useState<any>();
    const [data, setData] = useState<any>();

    const tflite = new Tflite();

    useEffect(() => {
        tflite.loadModel({
                model: "models/ssd_mobilenet.tflite",
                labels: "models/ssd_mobilenet.txt"
            },
            (err, res) => {
                if (err) console.log(err);
                else setInference(res);
            });
    });

    const onSelectImage = () => {
        const options: any = {
            title: "Select Avatar",
            customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorCode) {
                console.log("ImagePicker Error: ", response.errorCode);
            } else {
                const path = Platform.OS === "ios" ? response.uri : "file://" + response.path;

                const w = response.width;
                const h = response.height;

                this.setState({
                    source: { uri: path },
                    imageHeight: h * width / w,
                    imageWidth: width
                });
            }
        });

        const renderResults = () => {
            tflite.detectObjectOnImage({
                    camera,
                    threshold: 0.2,
                    numResultsPerClass: 1
                },
                (err, res) => {
                    if (err) console.log(err);
                    else setInference(res);
                });

            return (
                <React.Fragment>
                    <View style={{
                        borderWidth: 2,
                        borderRadius: 10,
                        position: "absolute",
                        borderColor: "#F00",
                        justifyContent: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        padding: 10,
                        ...bounds.size,
                        left: bounds.origin.x,
                        top: bounds.origin.y
                    }}
                    >

                    </View>
                </React.Fragment>
            );
        };

        const showAlert = (productId) => {
            if (popupShown) {
                return;
            }
            setPopupShown(true);
            Alert.alert(
                "Product Detected!",
                "Please choose one of the following",
                [
                    {
                        text: "View Reviews",
                        onPress: () => {
                            props.setProductScan(productId);
                            props.navigation.navigate("ReviewScreen");
                            console.log("view reviews pressed");
                            setPopupShown(false);
                        },
                        style: "default"
                    },
                    {
                        text: "View in AR",
                        onPress: () => {
                            props.setProductScan(productId);
                            props.navigation.navigate("ARScreen");
                            console.log("view in ar pressed");
                            setPopupShown(false);
                        },
                        style: "default"
                    },
                    {
                        text: "Cancel",
                        onPress: () => {
                            console.log("cancel pressed");
                            setPopupShown(false);
                        },
                        style: "cancel"
                    }
                ],
                {
                    cancelable: true,
                    onDismiss: () => {
                        setPopupShown(false);
                    }
                }
            );
        };

        const barcodeRecognized = ({ barcodes }) => {
            barcodes.forEach(barcode => {
                if (barcode && barcode.data && barcode.data.length > 0) {
                    const productId = barcode.data;
                    console.log("product id", productId);
                    showAlert(productId);
                }
            });
        };

        const takePicture = async function(ref) {
            const options = { quality: 0.5, base64: true };
            const data = await ref.takePictureAsync(options);

            //  eslint-disable-next-line
            console.log(data.uri);
        };

        return (
            <View style={{ display: "flex", width: "100%", height: "100%" }}>
                <RNCamera
                    ref={ref => {
                        setCamera(ref);
                    }}
                    style={{
                        flex: 1
                    }}
                    onGoogleVisionBarcodesDetected={barcodeRecognized}

                />
                <GenButton title={"Recognize object"} onPress={renderResults} />
            </View>
        );
    };

    export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen);
