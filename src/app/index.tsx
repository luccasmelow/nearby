import { View } from "react-native"
import { Welcome } from "@/components/welcome"
import { Steps } from "@/components/steps"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index(){
    return(
        <SafeAreaView style={{flex: 1, padding: 24}}>
            <Welcome/>
            <Steps />
        </SafeAreaView>
    )
}