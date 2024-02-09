import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react';

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
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
            Register
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
            Register to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Name
            </Text>

            <TextInput
              value={name}
              onChange={(text) => setName(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor="black"
              placeholder="Enter Your Name"
            />
          </View>

        <View style={{ marginTop: 10 }}>
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

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
          Image
            </Text>

            <TextInput
              value={image}
              onChange={(text) => setImage(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor="black"
              placeholder="Image"
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
            <Text style={{ color:"black",fontSize:16,fontWeight:"bold",textAlign:"center" }}>Register</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop:15}}>
    <Text style={{textAlign:"center",color:"gray",fontSize:16}}>Existing user? Sign Up</Text>
  </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})