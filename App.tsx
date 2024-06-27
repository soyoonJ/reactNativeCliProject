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
	const [countryCode, onChangeCountryCode] = useState('');
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
		const color = item.gender === gender ? 'white' : 'black';
		const borderColor = item.gender === gender ? '#09aa5c' : '#6c6c6e99';

		return (
			<TouchableOpacity
				onPress={() => onChangeGender(item.gender)}
				style={{ borderColor }}>
				<Text style={{ color }}>{item.gender}</Text>
			</TouchableOpacity>
		);
	};

	const renderCountryItem = ({ item }) => {
		const backgroundColor =
			item.countryCode === countryCode ? '#6e3b6e' : '#f9c2ff';
		const color = item.countryCode === countryCode ? 'white' : 'black';

		return (
			<TouchableOpacity
				onPress={() => onChangeCountryCode(item.countryCode)}
				style={[{ backgroundColor }]}>
				<Text style={[{ color }]}>
					{item.countryCode} {item.country}
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView>
			<TextInput
				value={id}
				onChangeText={onChangeId}
				placeholder="아이디"
				style={[styles.input]}
			/>
			<TextInput
				value={password}
				onChangeText={onChangePassword}
				placeholder="비밀번호"
				style={[styles.input]}
			/>
			<TextInput
				value={email}
				onChangeText={onChangeEmail}
				placeholder="[선택] 이메일주소 (비밀번호 찾기 확인용)"
				keyboardType="email-address"
				style={[styles.input]}
			/>
			<TextInput
				value={name}
				onChangeText={onChangeName}
				placeholder="이름"
				style={[styles.input]}
			/>
			<TextInput
				value={birthday}
				onChangeText={onChangeBirthday}
				placeholder="생년월일 8자리"
				keyboardType="number-pad"
				style={[styles.input]}
			/>

			<View>
				<FlatList
					data={genderData}
					renderItem={renderGenderItem}
					keyExtractor={item => item.id}
					extraData={gender}
				/>
			</View>

			<View style={styles.sample}>
				<FlatList
					data={countryData}
					renderItem={renderCountryItem}
					keyExtractor={item => item.countryCode}
					extraData={countryCode}
					style={[styles.input]}
				/>
			</View>

			<View>
				<Dropdown
					data={countryData}
					labelField="country"
					valueField="countryCode"
					onChange={item => onChangeCountryCode(item.countryCode)}
					value={countryCode}
				/>
			</View>

			<TextInput
				value={phoneNumber}
				onChangeText={onChangePhoneNumber}
				placeholder="휴대전화번호"
				keyboardType="phone-pad"
				style={[styles.input]}
			/>

			<TouchableOpacity onPress={onPressLearnMore} style={styles.button}>
				<Text style={styles.buttonText}>인증요청</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

export default App;
