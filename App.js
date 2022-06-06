import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput, CheckBox,br,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';



// <---------- Home screen ---------> \\

function Inicio({ navigation }) {
  return (
    <View style={styles_home.home}>
      <Image
        style={styles_home.tinyLogo}
        source = {require('./assets/logo.png')}/>
       
      <View style={styles_home.box}>
        <Text style={styles_home.texto}>Bem Vindo Ao Site Da Gol!!!</Text>

         <TouchableOpacity style={styles_home.botao} >
            <Text style={styles_home.texto_botao} onClick={() => navigation.navigate("Cadastro")} >Clique Aqui Para entrar</Text>
          </TouchableOpacity>

      </View>
    </View>
  );}

const styles_home = StyleSheet.create({
  home: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#111'
  },
  tinyLogo: {
    width: 170,
    height: 90,
    marginTop: 100
  },

  box: {
    alignItems:"center",
    display: "flex",
    justifyContent: "center",
    marginTop: 70
  },
  texto: {
    fontSize: 30,
    padding: 30,
    textAlign: 'center',
    color: '#fff',
  },
  botao:{
    width: 160,
    height: 45,
    backgroundColor: "#ff5c04",
    padding: 5,
    textAlign: "center",
    borderRadius: 5,
  },
  texto_botao:{
    color: '#fff', 
    fontWeight: 600, 
    fontSize: 15
  },
});

// <---------- Home screen ---------> \\

// <---------- Cadastro---------> \\
function Cadastro ({ navigation }){

  const [isSelected, setSelection] = useState(false);
  
    return (
      <View style={styles_cadastro.container}>
  
      <Image
        style={styles_home.tinyLogo}
        source = {require('./assets/logo.png')}/>
        <Text></Text>
        <br></br>
  
        <View style={styles_cadastro.container2}>

        <Text style={styles_cadastro.label} >Seu Nome:</Text>
        <TextInput
            style={styles_cadastro.input}
              placeholder='Informe o seu Nome'
              keyboardType={'email-address'}
          />
  
        <Text style={styles_cadastro.label} >Seu email:</Text>
        <TextInput
            style={styles_cadastro.input}
              placeholder='Insira seu email'
              keyboardType={'email-address'}
          />
  
          <Text style={styles_cadastro.label} >Sua senha:</Text>
          <TextInput
              style={styles_cadastro.input}
              placeholder='Insira sua senha'
              keyboardType={'password'} 
              secureTextEntry={true}    
          />
  
        <View style={styles_cadastro.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles_cadastro.checkbox}
          />
          <Text style={styles_cadastro.label}>Manter-me logado</Text>
        </View>
  
        <View style={styles_cadastro.container4}>
            <TouchableOpacity style={styles_cadastro.button1}>
            <Text 
                style={styles_cadastro.texto} 
                onClick={() => navigation.navigate("Inicio")}>
                Voltar</Text>
            </TouchableOpacity>
    

          
            <TouchableOpacity style={styles_cadastro.button2}>
              <Text 
                style={styles_cadastro.texto} 
                onClick={() => navigation.navigate("options")}>
                Avançar</Text>
            </TouchableOpacity>
          </View>
  
      
  
        <StatusBar style="auto" />
        </View>
      </View>
    );
  }
  
const styles_cadastro = StyleSheet.create({
    container: {
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container2:{
      alignItems: 'center',
      justifyContent: 'center',
      padding:50,
      backgroundColor: "#ff5c04",
      marginBottom: 50,
    },
    container3:{
      backgroundColor:"#fff",
    },
    container4:{
      flexDirection:"row",
    },
    tinyLogo: {
      width: 170,
      height: 90,
    },
    input:{
      height: 30,
      width:250, 
      textAlign:"center", 
      fontSize: "large",
      borderWidth:1, 
      marginBottom:10,
      backgroundColor:'#fff'
    },
    button1: {
      alignItems: "center",
      backgroundColor: "black",
      padding: 10,
      width:115,
      margin: 2,
      borderRadius: 5,
    },
    button2: {
      alignItems: "center",
      backgroundColor: "black",
      padding: 10,
      width:115,
      margin: 2,
      borderRadius: 5,
    },
    texto:{
      color: "#fff",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      fontSize: "large",
      color: "#000",
    }
   });
// <---------- Cadastro ---------> \\

// <---------- Opções ---------> \\
function DetailsScreen({ navigation }) {
  return (
    <View style={styles_opcoes.home}>

      <View style={styles_opcoes.top}>
        <Image
          style={styles_opcoes.tinyLogo}
          source = {require('./assets/logo.png')}/>
        <Text style={styles_opcoes.texto_topo}> O que deseja?</Text>

      </View>

        <View >

        <TouchableOpacity style={styles_opcoes.botao} >
            <Text 
            style={styles_opcoes.texto_botao} 
            onClick={() => navigation.navigate("Inicio")}>
            Home</Text>
          </TouchableOpacity>
          <br></br> 

          <TouchableOpacity style={styles_opcoes.botao} >
            <Text 
            style={styles_opcoes.texto_botao} 
            onClick={() => navigation.navigate("Cadastro")}>
            Cadastro</Text>
          </TouchableOpacity>
          <br></br> 

          <TouchableOpacity style={styles_opcoes.botao} >
            <Text 
            style={styles_opcoes.texto_botao} 
            onClick={() => navigation.navigate("Passagem")}>
            Comprar Passagem</Text>
          </TouchableOpacity>

          <br></br>

          <TouchableOpacity style={styles_opcoes.botao} >
            <Text 
            style={styles_opcoes.texto_botao} 
            onClick={() => navigation.navigate("Destino")}>
            Destinos  Nacionais</Text>
          </TouchableOpacity>

        </View>

    </View>
  );
}

const styles_opcoes = StyleSheet.create({

  top:{
    alignItems:"center",
  },
  home: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#111'
  },
  tinyLogo: {
    width: 170,
    height: 90,
    marginTop: 100
  },

  box: {
    alignItems:"center",
    display: "flex",
    justifyContent: "center",
    marginTop: 70
  },

  texto: {
    fontSize: 30,
    padding: 30,
    textAlign: 'center'
  },
  texto_topo:{
    fontSize: 30,
    padding:  30,
    textAlign: 'center',
    color: '#fff',
  },
  botao:{
    width: 160,
    height: 45,
    justifyContent: "center",
    backgroundColor: "#ff5c04",
    textAlign: "center",
    borderRadius: 5,

  },
  texto_botao:{
    color: '#fff',
    justifyContent: "center", 
    fontWeight: 500, 
    fontSize: 15,
  },
  botao_passagem:{
    width: 160,
    height: 45,
    justifyContent: "center",
    backgroundColor: "# ",
    textAlign: "center",

  },
  texto_botao_passagem:{
    color: '#fff',
    justifyContent: "center", 
    fontWeight: 500, 
    fontSize: 15,
  },
});
// <---------- Opções ---------> \\

// <---------- Passagem ---------> \\
function Passagem({navigation}){

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
    return (
      <View style={styles_passagem.container_imagem}>
  
         <Image
            style={styles_passagem.tinyLogo}
            source = {require('./assets/logo.png')}/>
  

        <View style={styles_passagem.container_passagem}>

        <Text style={styles_passagem.texto} >Destino</Text>
        <TextInput
            style={styles_passagem.input}
              placeholder='Informe o seu Destino'
              keyboardType={'text'}
          />
  
        <Text style={styles_passagem.texto} >Origem</Text>
        <TextInput
            style={styles_passagem.input}
              placeholder='Insira o Local de Origem'
              keyboardType={'text'}
          />
  
          <Text style={styles_passagem.texto} >Data Viagem</Text>
          <TextInput
              style={styles_passagem.input}
              placeholder='Insira a Data Da Viagem'
              keyboardType={'date'}     
          />

          <Text style={styles_passagem.texto} >Horario Do Voo</Text>
          <TextInput
              style={styles_passagem.input}
              placeholder='Insira o Horario Do Voo'
              keyboardType={'text'}     
          />

          <Text style={styles_passagem.texto} >Preço</Text>
          <TextInput
              style={styles_passagem.input}
              placeholder='Insira o preço Da Passagem'
              keyboardType={'text'}     
          />

            <Text style={styles_passagem.texto}>Forma De Pagamento</Text>
        <View style={styles_passagem.checkboxContainer}>

          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles_passagem.checkbox}
          />
          <Text style={styles_passagem.texto}>Debito</Text>
          <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles_passagem.checkbox}
          />
          <Text style={styles_passagem.texto}>Credito</Text>
        </View>
  
        <View style={styles_passagem.containerbotao}>
          <TouchableOpacity style={styles_passagem.button1}>
          <Text 
              style={styles_passagem.texto_botao} 
              onClick={() => navigation.navigate("options")}>
              Voltar</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity style={styles_passagem.button2}>
            <Text 
              style={styles_passagem.texto_botao} 
              onClick={() => navigation.navigate("Destino")}>
              Destinos</Text>
          </TouchableOpacity>
        </View>
          
  
      
  
        <StatusBar style="auto" />
        </View>
      </View>
  )
}

const styles_passagem = StyleSheet.create({

container_imagem: {
  backgroundColor: '#111',
  alignItems: 'center',
  justifyContent: 'center'
},
container_passagem:{
  alignItems: 'center',
  justifyContent: 'center',
  padding:50,
  backgroundColor:"#111",
},
containerbotao:{
  flexDirection:"row",
},
checkboxContainer: {
  margin: 5,
  flexDirection: "row",
  marginBottom: 20,
},
tinyLogo: {
  width: 170,
  height: 90,
  marginTop: 100
},
texto:{
  color: "#ff5c04",
  fontSize: 15,
},
texto_botao:{
  color: "#fff"
},
input:{
  height: 30,
  width:250, 
  textAlign:"center", 
  borderWidth:3,
  borderColor: "#000", 
  marginBottom:10,
  backgroundColor:'#fff'
},
button1: {
  alignItems: "center",
  backgroundColor: "black",
  padding: 10,
  width:115,
  margin: 2,
},
button2: {
  alignItems: "center",
  backgroundColor: "black",
  padding: 10,
  width:115,
  margin: 2,
},
checkbox: {
  margin: 2,
  alignSelf: "center",
},
});
// <---------- Passagem ---------> \\

// <---------- Destinos ---------> \\
function Destino ({navigation}){

const [isSelectedrj, setSelectionrj] = useState(false);createNativeStackNavigator
const [isSelectedbr, setSelectionbr] = useState(false);
const [isSelectedft, setSelectionft] = useState(false);
const [isSelectedcr, setSelectioncr] = useState(false);

return(
<View style={styles_destino.body}>
  <View style={styles_destino.topo}>
      <Image
        style={styles_destino.Logo}
        source = {require('./assets/logo.png')}/>

  </View>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <Text style={styles_destino.texto_topo}>Confira Abaixo Os Destinos Mais Visitados !!!</Text>
  <Text></Text>
{/* <--------------------- São Paulo container ---------------------------------------> */}
      <View style={styles_destino.container_sp}>
        <Text></Text>

      <Text style={styles_destino.label_sp}>São Paulo</Text>
        <Image
        style={styles_destino.imagem_sp}
        source = {require('./assets/sp.jpg')}/>
       
          <CheckBox
            value={isSelectedbr}
            onValueChange={setSelectionbr}
            style={styles_passagem.checkbox_sp}
          />
          </View>
          <br></br>

{/* <--------------------- Curitiba container ---------------------------------------> */}    
        <Text style={styles_destino.label_cr}>Curitiba</Text>
        <Image
          style={styles_destino.imagem_cr}
          source = {require('./assets/curitiba.png')}/>
        <View style={styles_destino.container_cr}>
          <CheckBox
            value={isSelectedcr}
            onValueChange={setSelectioncr}
            style={styles_passagem.checkbox_cr}
          />
          </View>
          <br></br>

{/* <--------------------- Fortaleza container ---------------------------------------> */}
        <Text style={styles_destino.label_ft}>Fortaleza</Text>
        <Image
          style={styles_destino.imagem_ft}
          source = {require('./assets/fortaleza.jpg')}/>
          <View style={styles_destino.container_ft}>
          <CheckBox
            value={isSelectedft}
            onValueChange={setSelectionft}
            style={styles_passagem.checkbox_ft}
          />
          </View>
          <br></br>

{/* <--------------------- Rio De Janeiro container ---------------------------------------> */}
      <Text style={styles_destino.label_rj}>Rio De Janeiro</Text>
        <Image
          style={styles_destino.imagem_rj}
          source = {require('./assets/rio.jpg')}/>
          <View style={styles_destino.container_rj}>
          <CheckBox
            value={isSelectedrj}
            onValueChange={setSelectionrj}
            style={styles_passagem.checkbox_rj}
          />
          </View>
          <br></br>

{/* <--------------------- Botões container ---------------------------------------> */}
        <View style={styles_destino.container_botao}> 
          <TouchableOpacity style={styles_destino.button1}>
          <Text 
              style={styles_destino.texto_botao} 
              onClick={() => navigation.navigate("options")}>
              Voltar</Text>
          </TouchableOpacity> 
          
          <TouchableOpacity style={styles_destino.button2}>
            <Text 
              style={styles_passagem.texto_botao} 
              onClick={() => navigation.navigate('Passagem')}>
              Passagem</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}

const styles_destino = StyleSheet.create({
body:{  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#111",
    marginBottom: 50,
},
topo:{
  alignItems: 'center',
  justifyContent: 'center'
},
texto_topo:{
  color:"#fff"
},
Logo: {
  width: 170,
  height: 90,
  marginTop: 100
},
container_botao:{
  flexDirection:"row",
},
texto_botao:{
  color:"#fff"
},
button1: {
  alignItems: "center",
  backgroundColor: "black",
  padding: 10,
  width:115,
  margin: 2,
},
button2: {
  alignItems: "center",
  backgroundColor: "black",
  padding: 10,
  width:115,
  margin: 2,
},
container_sp:{  
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  flexDirection:"column",
  backgroundColor:"#111",
},
imagem_sp:{
  width: 255,
  height: 150,
},
checkbox_sp: {
  margin: 2,
  alignSelf: "center",
},
label_sp:{
  color: "#ff5c04"
},
container_cr:{  
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  flexDirection:"column",
  backgroundColor:"#222",
},
imagem_cr:{
  width: 255,
  height: 150,
},
checkbox_cr: {
  margin: 2,
  alignSelf: "center",
},
label_cr:{
  color: "#ff5c04"
},
container_ft:{  
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  flexDirection:"column",
  backgroundColor:"#222",
},
imagem_ft:{
  width: 255,
  height: 150,
},
checkbox_ft: {
  margin: 2,
  alignSelf: "center",
},
label_ft:{
  color: "#ff5c04"
},
container_rj:{  
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  flexDirection:"column",
  backgroundColor:"#222",
},
imagem_rj:{
  width: 255,
  height: 150,
},
checkbox_rj: {
  margin: 2,
  alignSelf: "center",
},
label_rj:{
  color: "#ff5c04"
},

});
// <---------- Destinos ---------> \\ 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="options" component={DetailsScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Passagem" component={Passagem} />
        <Stack.Screen name="Destino" component={Destino}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;


