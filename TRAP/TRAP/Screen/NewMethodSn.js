import React from "react"
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
const NewMethodSn = () => {
    const [numberEntered, setEnteredNumber] = React.useState()
    const [newdMethodData, setMethodData] = React.useState({
        sum: 0,
        count: 1,
        time: 0
    })
    const formulaBased = () => {
        let start = new Date().getSeconds()
        let mid_val;
        let sumation = 0
        let val = parseInt(numberEntered)
        mid_val = parseInt(val / 2);
        if ((val % 2) != 0) {
            sumation = (val + 1) * (mid_val) + (mid_val + 1)
        }
        else if ((val % 2) == 0) {
            sumation = (val + 1) * mid_val
        }
        let end = new Date().getSeconds()

        setMethodData({
            sum: sumation,
            count: 1,
            time: end - start
        })
    }

    return (
        <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 20, marginLeft: 20 }}>New Method to Caluclate Sum :-</Text>
            <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>
                When we are required to find Sum upto n natural number we add one by one like 1+2+3+4+5+....+n and get the answer.
                But in this Method, no matter how big the <Text style={{fontWeight:"bold"}}>n</Text><Text style={{fontSize:20}}>th</Text> Value is. We can able to find it in One single step&nbsp;
                <Text style={{ fontSize: 20, lineHeight: 22 }}>
                    S
                <Text style={{ fontSize: 20 / 1.6, lineHeight: 22 * 1.1, textAlignVertical: 'top' }}>
                        n&nbsp;
                </Text>
                </Text>
                                (Sum upto n from 0)
                     </Text>
            <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>Enter Number:- </Text>
            <View style={{ alignItems: "center" }}>
                <TextInput
                    style={{ height: 40, borderColor: '#000', borderWidth: 4, width: 150, marginLeft: 20, paddingLeft: 15, marginTop: 10 }}
                    onChangeText={text => setEnteredNumber(text)}
                    placeholder={"Enter Number"}
                    keyboardType="number-pad"
                    value={numberEntered}
                />
                <TouchableOpacity
                    onPress={() => formulaBased(numberEntered)}
                >
                    <Text
                        style={{ fontSize: 16, marginLeft: 20, marginTop: 10, padding: 10, width: 100, backgroundColor: "blue", borderRadius: 50, textAlign: "center" }}
                    >Caluclate</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    newdMethodData.sum != 0 && <View>
                        <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 20 }}>
                            <Text style={{ fontSize: 20, lineHeight: 22 }}>
                                S
                                        <Text style={{ fontSize: 20 / 1.6, lineHeight: 22 * 1.1, textAlignVertical: 'top' }}>
                                    n&nbsp;
                                        </Text> = {newdMethodData.sum}
                            </Text>
                        </Text>
                        <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 5 }}>Step Encountered : {newdMethodData.count}</Text>
                        <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 5 }}>Time Complexity : {newdMethodData.time} s</Text>
                    </View>
                }
            </View>
        </View>

    )
}

export default NewMethodSn
