import { Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import { useState, useEffect } from "react";
import Tflite from "tflite-react-native";

const MLScene = () => {

    const tflite = new Tflite();
    const [inference, setInference] = useState();

    useEffect(() => {
        tflite.loadModel({
                path: "camera_path",
                model: "models/ssd_mobilenet.tflite",
                labels: "models/ssd_mobilenet.txt",
                numThreads: 1
            },
            (err, res) => {
                if (err) console.log(err);
                else setInference(res);
            });
    });

    const renderResults = () => {
        console.log(inference);
        console.log(inference["detectedClass"]);
        console.log(inference["confidenceInClass"]);
    };

    renderResults();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MLScene);
