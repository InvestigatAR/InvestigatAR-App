import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import {
    View,
    Alert,
    StyleSheet,
    ActivityIndicator,
    Dimensions
} from "react-native";
import { RNCamera } from "react-native-camera";
import GenButton from "../Shared/genButton";
import { getProduct, predict } from "../../service/api";
import axios from "axios";

const ScannerScreen = (props: any) => {
    const [popupShown, setPopupShown] = useState<any>(false);
    const [camera, setCamera] = useState<any>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [identifedAs, setIdentifedAs] = useState<String>();

    const takePicture = async () => {
        if (camera) {
            //Pause camera preview
            camera.pausePreview();
            setIsLoading(true);

            //Set the options for the camera
            const options = {
                base64: true
            };

            // Get the base64 version of the image
            const data = await camera.takePictureAsync(options);
            identifyImage(data.base64);
        }
    };

    const identifyImage = imageData => {
        //Initialize the Clarifai api
        const Clarifai = require("clarifai");
        const app = new Clarifai.App({
            apiKey: "e70ea94336ce42f3bf78cdf8f8117217"
        });

        console.log("Identifying image");

        predict(imageData).then((res: any) => {
            console.log('this is res ', res);
            console.log('this is res.data ', res.data);
            displayAnswer(res.data.objects_confidence[0].keys[0]);
        }).catch((err: any) => {
            console.log(err);
            camera.resumePreview();
        });


        // Identify the image
        // const data = { base64: imageData };
        // app.models
        //     .predict(Clarifai.APPAREL_MODEL, data)
        //     .then((res: any) => {
        //         displayAnswer(res.outputs[0].data.concepts[0].name);
        //         console.log(res.outputs[0].data.concepts);
        //         console.log("display answer: ", res.outputs[0].data.concepts[0].name);
        //     })
        //     .catch((err: any) => {
        //         console.log(err);
        //         camera.resumePreview();
        //     });
    };

    const displayAnswer = identifiedImage => {
        // Dismiss the activity indicator
        setIdentifedAs(identifiedImage);

        console.log(identifiedImage);

        setIsLoading(false);

        // Show an alert with the answer on
        // Show an alert with the answer on
        // @ts-ignore
        // Alert.alert(identifiedImage, '');
        console.log("this is ", identifiedImage);

        getProduct(props, `?category=${identifiedImage.toLowerCase()}`)
            .then(res => {
                console.log("product data", res.data);

                const products: any = res.data;

                if (products.length > 0) {
                    // Resume the preview
                    const product = products[0];
                    props.setProductScan(product.id);
                    showAlert(product.id);
                }

                camera.resumePreview();
            })
            .catch((error: any) => {
                console.warn("error getting products", error);
                // Resume the preview
                camera.resumePreview();
            });
    };

    const showAlert = productId => {
        if (popupShown) {
            return;
        }
        setPopupShown(true);
        Alert.alert(
            "Product Detected!",
            "Please choose one of the following",
            [
                {
                    text: "View Info",
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
            <GenButton title={"Recognize object"} onPress={takePicture} />
        </View>
    );
};

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    loadingIndicator: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen);
