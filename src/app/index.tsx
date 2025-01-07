import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { router } from "expo-router"

import { Welcome } from "@/components/welcome"
import { Steps } from "@/components/steps"
import { Button } from "@/components/button"

export default function Index(){
    return(
        <SafeAreaView style={{flex: 1, paddingHorizontal: 38, gap: 48}}>
            <Welcome/>
            <Steps />
            <Button onPress={() => router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </SafeAreaView>
    )
}