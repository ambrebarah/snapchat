import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { StyleSheet, Styles, TextInput, Text, View, Button, TouchableOpacity } from 'react-native';

const Register = ({ }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

const submit = () => {

  const body = {
    email: email,
    password: password
  };

  fetch ('http://snapi.epitech.eu:8000/inscription', {
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body),
    method: "POST"
  }) 
  .then ( (reponse) => {
    console.log(reponse)
  });
}

    return (
        <View style={styles.container}>
        <Text style={styles.logo}>SnapRaph</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={submit}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

  
      </View>
    );
  };
  export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#e6d92c",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f7f7f2",
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#080808'
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#e6d92c",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    
  },
  loginText:{
    color:"black"
  }
});
