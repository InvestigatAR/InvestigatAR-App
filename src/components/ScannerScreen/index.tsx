import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import { View, Alert, StyleSheet, Text, Image } from "react-native";
import { RNCamera } from "react-native-camera";
import GenButton from "../Shared/genButton";

import RNFS from "react-native-fs";
import ImagePicker from 'react-native-image-picker';
import { CameraOptions, ImageLibraryOptions } from "react-native-image-picker";

import * as jpeg from "jpeg-js";

import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as cocossd from "@tensorflow-models/coco-ssd";

const ScannerScreen = (props: any) => {

    const [popupShown, setPopupShown] = useState<any>(false);
    const [camera, setCamera] = useState<any>(undefined);

    //Tensorflow stuff
    const [isTfReady, setIsTfReady] = useState<boolean>(false);
    const [isModelReady, setIsModelReady] = useState<boolean>(false);
    const [predictions, setPredictions] = useState<any>();
    const [imageURI, setImageURI] = useState<any>();
    const [model, setModel] = useState<any>();

    /* AI Object Detection */
    useEffect(() => {
        async function loadTf() {
            await tf.ready();
            setIsTfReady(true);

            setModel(await cocossd.load());
            setIsModelReady(true);
        }

        loadTf();
    }, []);

    const imageToTensor = (rawImageData) => {
        const TO_UINT8ARRAY: any = true;
        const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);

        // Drop the alpha channel info for mobilenet
        const buffer = new Uint8Array(width * height * 3);

        let offset = 0; // offset into original data
        for (let i = 0; i < buffer.length; i += 3) {
            buffer[i] = data[offset];
            buffer[i + 1] = data[offset + 1];
            buffer[i + 2] = data[offset + 2];

            offset += 4;
        }

        return tf.tensor3d(buffer, [height, width, 3]);
    };

    const detectObjects = async () => {
        try {
            const imageAssetPath = imageURI;

            console.log(imageAssetPath.uri);

            let imgB64;
            RNFS.readFile(imageAssetPath.uri, "base64")
                .then(res => {
                    imgB64 = res;
                    console.log(res);
                });

            const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
            const raw = new Uint8Array(imgBuffer);
            const imageTensor = imageToTensor(raw);
            console.log("imageTensor: ", imageTensor);
            const predictions = await model.detect(imageTensor);

            setPredictions({ predictions: predictions });

            console.log("----------- predictions: ", predictions);

        } catch (error) {
            console.log("Exception Error: ", error);
        }
    };

    const selectImage = async () => {
        const options: ImageLibraryOptions & CameraOptions = {
            mediaType: "photo",
            videoQuality: "high",
            quality: 1,
            maxWidth: 0,
            maxHeight: 0,
            includeBase64: true,
            cameraType: "back",
            selectionLimit: 1,
            saveToPhotos: false,
            durationLimit: 0
        };

        ImagePicker.launchImageLibrary(options, (response:any) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // alert(JSON.stringify(response));s
                console.log('response', JSON.stringify(response));
                setImageURI(response.uri);
            }
        });
    };

    const renderPrediction = (prediction, index) => {
        const pclass = prediction.class;
        const score = prediction.score;
        const x = prediction.bbox[0];
        const y = prediction.bbox[1];
        const w = prediction.bbox[2];
        const h = prediction.bbox[3];

        return (
            <Text key={index} style={styles.text}>
                Prediction: {pclass} {", "} Probability: {score} {", "} Bbox: {x} {", "} {y} {", "} {w} {", "} {h}
            </Text>
        );
    };


    /* QR Code Scanning */
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
            <GenButton title={"Recognize object"} onPress={selectImage} />
            <View style={styles.predictionWrapper}>
                {isModelReady && imageURI && (
                    <Text style={styles.text}>
                        Predictions: {predictions ? "" : "Detecting..."}
                    </Text>
                )}

                {isModelReady &&
                predictions &&
                predictions.map((p, index) => renderPrediction(p, index))}
            </View>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171f24"
    },
    welcomeContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: "contain",
        marginTop: 3,
        marginLeft: -10
    },
    contentContainer: {
        paddingTop: 30
    },
    loadingContainer: {
        marginTop: 80,
        justifyContent: "center"
    },
    text: {
        color: "#ffffff",
        fontSize: 16
    },
    loadingModelContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    imageWrapper: {
        width: 280,
        height: 280,
        padding: 10,
        borderColor: "blue",
        borderWidth: 5,
        borderStyle: "dashed",
        marginTop: 40,
        marginBottom: 10,
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: 250,
        height: 250,
        position: "absolute",
        top: 10,
        left: 10,
        bottom: 10,
        right: 10
    },
    predictionWrapper: {
        height: 100,
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    transparentText: {
        color: "#ffffff",
        opacity: 0.7
    },
    footer: {
        marginTop: 40
    },
    poweredBy: {
        fontSize: 20,
        color: "#e69e34",
        marginBottom: 6
    },
    tfLogo: {
        width: 125,
        height: 70
    }
});
