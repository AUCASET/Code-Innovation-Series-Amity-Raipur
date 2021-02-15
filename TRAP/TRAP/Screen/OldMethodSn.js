import React from "react"
import { Text, View, TouchableOpacity,  TextInput } from 'react-native';
const OldMethodSn=()=>{
    const [numberEntered,setEnteredNumber] = React.useState()
    const [oldMethodData,setMethodData] = React.useState({
        sum:0,
        count:0,
        time:0
    })
    const itretiveMethodSn = () => {
        let sum= 0
        let counting = 0
        let start = new Date().getSeconds()
        for (let i = 1; i <= numberEntered; i++) {
            counting = counting + 1
            sum = sum + i;
        }
        let end = new Date().getSeconds()
        setMethodData({
            sum:sum,
            count:counting,
            time:end-start
        })
        // setCal(false)
    }
    return (
        <View style={{marginBottom:20}}>
            <Text style={{ fontSize: 20, marginLeft: 20 }}>Old Method to Caluclate Sum :-</Text>
            <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>
                When we are required to find Sum upto n natural numbers. we'll add them one by one like 1+2+3+4+5+....+n and get the SUM at the end.
                Now let's see how many steps we've encountered so far for finding 
                        <Text style={{ fontSize: 20, lineHeight: 22 }}>
                    &nbsp;S
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
                    onPress={async() => 
                    {
                        itretiveMethodSn(numberEntered)

                    }
                    }
                >
                    <Text
                        style={{ fontSize: 16, marginLeft: 20, marginTop: 10, padding: 10, width: 100, backgroundColor: "blue", borderRadius: 50, textAlign: "center" }}
                    >Caluclate</Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    oldMethodData.sum!=0 && <View>
                                <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 20 }}>
                                    <Text style={{ fontSize: 20, lineHeight: 22 }}>
                                        S
                                        <Text style={{ fontSize: 20 / 1.6, lineHeight: 22 * 1.1, textAlignVertical: 'top' }}>
                                            n&nbsp;
                                        </Text> = {oldMethodData.sum}
                                    </Text>
                                </Text>
                                <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 5 }}>Step Encountered : {oldMethodData.count}</Text>
                                <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 5 }}>Time Complexity : {oldMethodData.time} s</Text>
                            </View>
                }
            </View>
        </View>

    )
}


export default OldMethodSn
