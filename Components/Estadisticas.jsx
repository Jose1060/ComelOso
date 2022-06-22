import { Text, View } from "react-native";
import tw from "twrnc";
import Estadistica from "./Estadistica";

const Estadisticas = () => {
	return (
		<View style={tw`mt-10 px-5`}>
			<div style={tw`flex flex-row gap-4`}>
				<div style={tw`pr-5`}>
					<Estadistica></Estadistica>
				</div>
				<div>
					<Estadistica></Estadistica>
				</div>
			</div>
		</View>
	);
};

export default Estadisticas;
