import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


function App(): React.JSX.Element {
  const [id, onChangeId] = useState('')
  const [password, onChangePassword] = useState('')
  const [email, onChangeEmail] = useState('')
  const [name, onChangeName] = useState('')
  const [birthday, onChangeBirthday] = useState('')
  const [gender, onChangeGender] = useState('')
  const [countryCode, onChangeCountryCode] = useState('')
  const [phoneNumber, onChangePhoneNumber] = useState('')


  const onPressLearnMore = () => {
    console.log('onPress')
    Alert.alert('인증요청!')
  }

  const gendercountryData = [
    {title: '', countryData:['남자', '여자', '선택안함']}
  ]

  const countryData = [
    {
      countryCode: '+82',
      country: '대한민국'
    },
    {
      countryCode: '+83',
      country: '테스트'
    }
  ]


  const renderCountryItem = ({item}) => {
    const backgroundColor = item.countryCode === countryCode ? '#6e3b6e' : '#f9c2ff';
    const color = item.countryCode === countryCode ? 'white' : 'black';

    return (
      <TouchableOpacity onPress={() => onChangeCountryCode(item.countryCode)} style={[{backgroundColor}]}>
        <Text style={[{color}]}>{item.country}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <TextInput value={id} onChangeText={onChangeId} placeholder="아이디"/>
      <TextInput value={password} onChangeText={onChangePassword} placeholder="비밀번호"/>
      <TextInput value={email} onChangeText={onChangeEmail} placeholder="[선택] 이메일주소 (비밀번호 찾기 확인용)" keyboardType='email-address'/>
      <TextInput value={name} onChangeText={onChangeName} placeholder="이름"/>
      <TextInput value={birthday} onChangeText={onChangeBirthday} placeholder="생년월일 8자리" keyboardType='number-pad'/>
    
      <Text>{gender}</Text>
      <View>
        <Button title="남자" onPress={() => onChangeGender('남자')}/>
        <Button title="여자" onPress={() => onChangeGender('여자')}/>
        <Button title="선택안함" onPress={() => onChangeGender('선택안함')}/>
      </View>

      <FlatList data={countryData}
        renderItem={renderCountryItem}
        keyExtractor={item => item.countryCode}
        extraData={countryCode}/>

      <TextInput value={phoneNumber} onChangeText={onChangePhoneNumber} placeholder="휴대전화번호" keyboardType='phone-pad'/>

      <Button onPress={onPressLearnMore}
        title="인증요청"
        color="#09aa5c"
        accessibilityLabel="authentication request button"/>
    </SafeAreaView>
  );
}


export default App;
