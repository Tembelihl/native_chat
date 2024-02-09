import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white", // Corrected background color
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#A389E8", fontSize: 17, fontWeight: "600" }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChange={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor="black"
              placeholder="Enter Your Email"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor="black"
              placeholder="Enter Your Password"
            />
          </View>

          <Pressable
            style={{
              width: 200,
              backgroundColor: "#A389E8",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text style={{ color:"black",fontSize:16,fontWeight:"bold",textAlign:"center" }}>Login</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop:15}}>
    <Text style={{textAlign:"center",color:"gray",fontSize:16}}>New user? Sign Up</Text>
  </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

