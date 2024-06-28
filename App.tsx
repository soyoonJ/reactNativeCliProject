import React, { useState } from 'react';
import {
	Alert,
	FlatList,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { styles } from './styles';
import { Dropdown } from 'react-native-element-dropdown';

function App(): React.JSX.Element {
	const [id, onChangeId] = useState('');
	const [password, onChangePassword] = useState('');
	const [email, onChangeEmail] = useState('');
	const [name, onChangeName] = useState('');
	const [birthday, onChangeBirthday] = useState('');
	const [gender, onChangeGender] = useState('');
	const [countryCode, onChangeCountryCode] = useState('+82');
	const [phoneNumber, onChangePhoneNumber] = useState('');

	const onPressLearnMore = () => {
		console.log('onPress');
		Alert.alert('인증요청!');
	};

	const genderData = [
		{
			id: 1,
			gender: '남자',
		},
		{
			id: 2,
			gender: '여자',
		},
		{
			id: 0,
			gender: '선택안함',
		},
	];

	const countryData = [
		{
			countryCode: '+82',
			country: '대한민국',
		},
		{
			countryCode: '+83',
			country: '테스트국가',
		},
	];

	const renderGenderItem = ({ item }) => {
		const color = item.gender === gender ? '#09aa5c' : '#6c6c6e99';

		return (
			<TouchableOpacity
				onPress={() => onChangeGender(item.gender)}
				style={[
					styles.selectBox,
					{
						borderColor: color,
						borderTopLeftRadius: item.gender === '남자' ? 4 : 0,
						borderBottomLeftRadius: item.gender === '남자' ? 4 : 0,
						borderTopRightRadius: item.gender === '선택안함' ? 4 : 0,
						borderBottomRightRadius: item.gender === '선택안함' ? 4 : 0,
						marginLeft: item.gender !== '남자' ? -1 : 0,
					},
				]}>
				<Text style={[styles.selectBoxText, { color }]}>{item.gender}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={styles.pageContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					value={id}
					onChangeText={onChangeId}
					placeholder="아이디"
					style={[styles.inputLayout, styles.inputLayoutTopRadius]}
				/>
				<TextInput
					value={password}
					onChangeText={onChangePassword}
					placeholder="비밀번호"
					style={[styles.inputLayout, styles.inputLayoutBorderMargin]}
				/>
				<TextInput
					value={email}
					onChangeText={onChangeEmail}
					placeholder="[선택] 이메일주소 (비밀번호 찾기 확인용)"
					keyboardType="email-address"
					style={[
						styles.inputLayout,
						styles.inputLayoutBottomRadius,
						styles.inputLayoutBorderMargin,
					]}
				/>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					value={name}
					onChangeText={onChangeName}
					placeholder="이름"
					style={[styles.inputLayout, styles.inputLayoutTopRadius]}
				/>
				<TextInput
					value={birthday}
					onChangeText={onChangeBirthday}
					placeholder="생년월일 8자리"
					keyboardType="number-pad"
					style={[styles.inputLayout, styles.inputLayoutBorderMargin]}
				/>
				<View style={[styles.inputLayout, styles.inputLayoutBorderMargin]}>
					<FlatList
						data={genderData}
						renderItem={renderGenderItem}
						keyExtractor={item => item.id}
						extraData={gender}
						style={styles.selectBoxContainer}
						contentContainerStyle={styles.selectBoxLayout}
					/>
				</View>
				<View>
					<Dropdown
						data={countryData}
						labelField="country"
						valueField="countryCode"
						onChange={item => onChangeCountryCode(item.countryCode)}
						value={countryCode}
						style={[styles.inputLayout, styles.inputLayoutBorderMargin]}
					/>
				</View>
				<TextInput
					value={phoneNumber}
					onChangeText={onChangePhoneNumber}
					placeholder="휴대전화번호"
					keyboardType="phone-pad"
					style={[
						styles.inputLayout,
						styles.inputLayoutBottomRadius,
						styles.inputLayoutBorderMargin,
					]}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={onPressLearnMore} style={[styles.button]}>
					<Text style={styles.buttonText}>인증요청</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

export default App;
