import React, {FC, useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AirbnbRating } from "react-native-ratings";

const {height, width} = Dimensions.get('screen')
// interface Props {
//     title: string;
//     sus_score: number;
//     description: string;
//     onPress: () => void
// }


const History : FC <any> = (props) => {
    // const[card, setCard] = useState<any>(undefined);
    let card:any = undefined;
    const size  = 50;
    return (

            <TouchableOpacity style={styles.container} onPress={props.onPress} disabled={true}>
                <Text style={styles.text}>{props.title} </Text>
                <View style={styles.horizontal}>
                    <View style={styles.element_horizontal}>
                        <AnimatedCircularProgress
                            size={70}
                            width={5}
                            fill={props.sus_score * 100}
                            tintColor="#00e0ff"
                            arcSweepAngle={180}
                            rotation={270}
                            padding={0}
                            backgroundColor="#3d5875">
                            {
                                (fill) => (
                                <Text>
                                    {props.sus_score * 100}
                                </Text>
                            )
                        }
                        </AnimatedCircularProgress>
                    </View>
                    <View style={styles.element_horizontal}>
                        <AirbnbRating
                          count={5}
                          reviews={[
                              'Terrible',
                              'Bad',
                              'Good',
                              'Wow',
                              'Amazing',
                              'Excellent',
                          ]}
                          defaultRating={props.rating}
                          size={30}
                          // onFinishRating={rating => {
                          //     setRating(rating);
                          // }}
                          showRating={false}
                          isDisabled
                        />
                        {/*<AnimatedCircularProgress*/}
                        {/*    size={70}*/}
                        {/*    width={5}*/}
                        {/*    fill={props.sus_score * 100}*/}
                        {/*    tintColor="#00e0ff"*/}
                        {/*    arcSweepAngle={180}*/}
                        {/*    rotation={270}*/}
                        {/*    padding={0}*/}
                        {/*    backgroundColor="#3d5875">*/}
                        {/*    {*/}
                        {/*        (fill) => (*/}
                        {/*        <Text>*/}
                        {/*            {props.sus_score * 100}*/}
                        {/*        </Text>*/}
                        {/*    )*/}
                        {/*}*/}
                        {/*</AnimatedCircularProgress>*/}
                    </View>
                </View>
                <Text style={styles.description}> {props.description}</Text>
            </TouchableOpacity>

        // </CardFlip>

        // <TouchableOpacity style={styles.container} onPress={props.onPress} disabled={true}>
        //     <Text style={styles.text}>{props.title} </Text>
        //     <View style={styles.horizontal}>
        //         <View style={styles.element_horizontal}>
        //             <AnimatedCircularProgress
        //                 size={70}
        //                 width={5}
        //                 fill={props.sus_score * 100}
        //                 tintColor="#00e0ff"
        //                 arcSweepAngle={180}
        //                 rotation={270}
        //                 padding={0}
        //                 backgroundColor="#3d5875">
        //                 {
        //                     (fill) => (
        //                     <Text>
        //                         {props.sus_score * 100}
        //                     </Text>
        //                 )
        //             }
        //             </AnimatedCircularProgress>
        //         </View>
        //         <View style={styles.element_horizontal}>
        //             <AnimatedCircularProgress
        //                 size={70}
        //                 width={5}
        //                 fill={props.sus_score * 100}
        //                 tintColor="#00e0ff"
        //                 arcSweepAngle={180}
        //                 rotation={270}
        //                 padding={0}
        //                 backgroundColor="#3d5875">
        //                 {
        //                     (fill) => (
        //                     <Text>
        //                         {props.sus_score * 100}
        //                     </Text>
        //                 )
        //             }
        //             </AnimatedCircularProgress>
        //         </View>
        //     </View>
        //     <Text style={styles.description}> {props.description}</Text>
        // </TouchableOpacity>
    )
}
export default History

const styles = StyleSheet.create({
    container: {
        // backgroundColor : '#000',
        alignItems : 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#FB8A86',
        width: width * 0.9,
        height: 200,
        marginVertical: 15,
    },
    text : {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    description : {
        color: '#000',
        fontSize: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    element_horizontal: {
        marginHorizontal: 20
    }

})
