import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import { View, Alert, ImageBackground, ImagePickerIOS, StyleSheet, Text } from "react-native";
import { RNCamera } from "react-native-tflite-camera";
import GenButton from "../Shared/genButton";
import Tflite from "tflite-react-native";
import ImagePicker from "react-native-image-picker";
import { Platform } from "react-native";

const ScannerScreen = (props: any) => {

    const [popupShown, setPopupShown] = useState<any>(false);
    const [camera, setCamera] = useState<any>(undefined);
    const [inference, setInference] = useState<any>();
    const [source, setSource] = useState<any>();
    const [imageHeight, setImageHeight] = useState<any>();
    const [imageWidth, setImageWidth] = useState<any>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    let tflite = new Tflite();

    const onSelectImage = () => {
        tflite = new Tflite();
        console.log("Logging tflite ", tflite);

        if (!isLoaded) {
            tflite.loadModel({
                    model: "../../models/ssd_mobilenet.tflite",
                    labels: "../../models/ssd_mobilenet.txt"
                },
                (err, res) => {
                    if (err) console.log(err);
                    else setInference(res);
                });
            setIsLoaded(true);
        }

        const options: any = {
            title: "Select Avatar",
            customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        //Load image from image library
        ImagePicker.launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorCode) {
                console.log("ImagePicker Error: ", response.errorCode);
            } else {
                const path = Platform.OS === "ios" ? response.uri : "file://" + response.path;

                const w = response.width;
                const h = response.height;

                setImageWidth(w);
                setImageHeight(h);
                setSource({ uri: path });

                tflite.detectObjectOnImage({
                        path,
                        threshold: 0.2,
                        numResultsPerClass: 1
                    },
                    (err, res) => {
                        if (err) console.log(err);
                        else setInference({ recognitions: res });
                    });
            }
        });
    };

    const renderResults = () => {
        onSelectImage();

        return inference.map((res, id) => {
            const left = res["rect"]["x"] * imageWidth;
            const top = res["rect"]["y"] * imageHeight;
            const width = res["rect"]["w"] * imageWidth;
            const height = res["rect"]["h"] * imageHeight;
            return (
                <View key={id} style={[styles.box, { top, left, width, height }]}>
                    <Text style={{ color: "white", backgroundColor: "blue" }}>
                        {res["detectedClass"] + " " + (res["confidenceInClass"] * 100).toFixed(0) + "%"}
                    </Text>
                </View>
            );
        });
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    imageContainer: {
        borderColor: "blue",
        borderRadius: 5,
        alignItems: "center"
    },
    text: {
        color: "blue"
    },
    button: {
        width: 200,
        backgroundColor: "blue",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    buttonText: {
        color: "white",
        fontSize: 15
    },
    box: {
        position: "absolute",
        borderColor: "blue",
        borderWidth: 2
    },
    boxes: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen);
