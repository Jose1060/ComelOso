import { Text, View } from "react-native";
import tw from "twrnc";
import Estadisticas from "./Components/Estadisticas";

export default function App() {
	return (
		<View style={tw`flex flex-col h-full bg-yellow-100`}>
			<div style={tw`mt-10 ml-5`}>
				<Text style={tw`text-black text-5xl text-center`}>ComelOSO</Text>
			</div>
			<div>
				<Estadisticas></Estadisticas>
			</div>
		</View>
	);
}
