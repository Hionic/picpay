import React, {Component} from 'react';
import { View, Text, Dimensions, ScrollView, Image, Platform } from 'react-native'
import { bold } from 'ansi-colors'



export default class flexDirectionBasics extends Component {
render() {  
  return (
<View style = {{flex: 1, flexDirection: "column", backgroundColor:'#F8F8F8'}}>
<ScrollView>
{/* TOPO */}
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <View style = {{flex: 1, alignItems: "flex-start"}}>
        <Image source = {require('./src/imagem/qrcode.png')} style= {{width:35, height: 35, marginLeft: 5, marginTop: 4}} />
        </View>
        <View style = {{flex: 1, alignItems: "center"}}>
          <Text style = {{fontSize: 12, fontWeight: 'bold'}}> Meu Saldo </Text>
          <Text style = {{fontWeight: 'bold'}}>R$ 200,00</Text>
        </View>
        <View style = {{flex: 1, alignItems: "flex-end"}}>
        <Image source = {require('./src/imagem/add.png')} style= {{width:35, height: 35, marginRight: 5, marginTop: 4}} />
        </View>
    </View> 
   

{/* USUARIOS     */}
    <View style = {{height: 180, flexDirection: "column", backgroundColor: '#19CB78'}}>
      
      <View>
        <Text style = {{marginLeft: 10, marginTop: 20, fontWeight: 'bold', color: '#fff', height:40}}>Sugestões para você</Text>
      </View>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style = {{marginLeft: 10}}>
         
          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/aries.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5 }} />
            <Text style={{fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Aries</Text>
          </View>
         
          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/touro.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Touro</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/gemeos.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Gemeos</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/cancer.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Cancer</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/leao.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Leao</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/virgem.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Virgem</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/libra.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Libra</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/escorpiao.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Escorpião</Text>
          </View>
          
          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/sagitario.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Sagitário</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/capricornio.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Capricornio</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/aquario.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Aquario</Text>
          </View>

          <View style={{alignItems: "center"}}>
            <Image source = {require('./src/imagem/peixes.png')} style={{borderRadius: 50, width: 80, height: 80, 
            borderColor: '#fff', borderColor: '#fff', borderWidth: 5, marginLeft: 20}} />
            <Text style={{fontSize: 14, marginLeft: 20, color: '#fff', fontWeight: 'bold'}}>Peixes</Text>
          </View>
       
        </ScrollView>      
    </View>


 {/* Corpo */}
    <View style = {{flexDirection: "row", backgroundColor: '#F8F8F8', justifyContent: "space-between", marginTop: 20}}> 
      
      <View style = {{flex:3}}>
        <Text style = {{marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>Atividade</Text>
      </View>
      
      <View style = {{flex:1, alignItems: "center", marginRight: 35, borderBottomWidth: 3, borderColor: '#19CB78'}}>
        <Text style = {{color: '#19CB78', marginBottom: 10}}>Todos</Text>
      </View>
    
      <View style = {{flex:1, alignItems: "flex-end", marginRight: 35}}>
        <Text>Minhas</Text>
      </View>
    
    </View>
     
{/* Operacoes    */}
  <View style = {{flex: 1, padding: 10}}>
      
{/* Quadrao 1 */}
    <View style = {{ backgroundColor: '#fff', marginLeft: 1, marginRight: 1, borderRadius: 5, padding: 15,
        flexDirection: "column", alignItems: "center", elevation: 3}}>
         
        <View style = {{ width: '100%', flexDirection: "row"}}>
          <Image source = {require('./src/imagem/peixes.png')} style={{borderRadius: 50, width: 55, height: 55,
          borderColor: '#F8F8F8', borderWidth: 1, marginLeft: 10}} />
          <Text style ={{marginLeft: 10, fontWeight: 'bold', padding: 15, marginLeft: -10}}> @Peixes </Text>
          <Text style = {{padding: 15, marginLeft: -30}}>pagou a</Text>
          <Text style = {{fontWeight: 'bold', padding: 15, marginLeft: -30}}> @Sagitário </Text>
        </View>
        
        <View style = {{flexDirection: "row", width: '100%', padding: 10}}>
          <Text style = {{fontSize: 15}}>Duelo marcado pago!!</Text>
        </View>
        
        
{/* Valor e Tempo */}        
      <View style = {{flexDirection: "row", padding: 10, width: '100%', justifyContent: "space-between" }}>
          
        <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}> 
          
          <View style = {{flex: 4, flexDirection: "row"}}>
            <Image source = {require('./src/imagem/tempo.png')} style={{width: 25, height: 25}}/>
            <Text style={{color: '#CACDD2', padding: 2}}> 4 minutos</Text>
          </View>  

        </View> 

{/* Comentario e favotiro */}
        <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
          
          <View style = {{flexDirection: "row", marginRight: 20 }}>
            <Image source = {require('./src/imagem/caixa.png')} style={{width: 25, height: 25}}/>
            <Text style={{color: '#CACDD2', padding: 2}}> 5 </Text>
          </View>
        
          <View style = {{flexDirection: "row"}}>
            <Image source = {require('./src/imagem/coracao.png')} style={{width: 25, height: 25}}/>
            <Text style={{color: '#CACDD2', padding: 2}}> 5 </Text>
          </View>
        
        </View>      

      </View>  
      
    </View>
{/* //Quadrado 1 */}    

{/* quadrado 2 */}
    <View style = {{ backgroundColor: '#fff', marginTop: 10 ,marginLeft: 1, marginRight: 1, borderRadius: 5, padding: 15,
        flexDirection: "column", alignItems: "center", elevation: 3}}>
         
        <View style = {{ width: '100%', flexDirection: "row"}}>
          <Image source = {require('./src/imagem/aries.png')} style={{borderRadius: 50, width: 55, height: 55,
          borderColor: '#F8F8F8', borderWidth: 1, marginLeft: 10}} />
          <Text style ={{marginLeft: 10, fontWeight: 'bold', padding: 15, marginLeft: -10}}> @Aries </Text>
          <Text style = {{padding: 15, marginLeft: -30}}>pagou a</Text>
          <Text style = {{fontWeight: 'bold', padding: 15, marginLeft: -30}}> Você </Text>
        </View>
        
        <View style = {{flexDirection: "row", width: '100%', padding: 10}}>
          <Text style = {{fontSize: 15}}>Duelo marcado pago!!</Text>
        </View>
        
{/* Valor e Tempo */}        
      <View style = {{flexDirection: "row", padding: 10, width: '100%', justifyContent: "space-between" }}>
          
        <View style = {{flex: 1, flexDirection: "row"}}> 
          
        <View style = {{}}>
          <Text style = {{color: "#19CB78", fontWeight: 'bold'}}>R$ 1,00</Text>
        </View>

        <View style = {{flexDirection: "row", marginLeft: 5, color: '#CACDD2', padding: 2}}>
          <Text style = {{}}>|</Text>
        </View>
          
        <View style = {{flex: 3, flexDirection: "row"}}>
          <Image source = {require('./src/imagem/tempo.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
          <Text style={{color: '#CACDD2', padding: 2}}> 10 minutos</Text>
        </View>  

        </View>   
          
{/* Comentario e favotiro */}
        <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>

            <View style = {{flexDirection: "row", marginRight: 20 }}>
              <Image source = {require('./src/imagem/caixa.png')} style={{width: 25, height: 25}}/>
              <Text style={{color: '#CACDD2', padding: 2}}> 1 </Text>
            </View>
        
            <View style = {{flexDirection: "row"}}>
             <Image source = {require('./src/imagem/coracao1.png')} style={{width: 25, height: 25}}/>
             <Text style={{color: '#CACDD2', padding: 2}}> 20 </Text>
            </View>
        
        </View>
      
      </View>
      
    </View>
{/* //Quadrado 2 */}

{/* quadrado 3 */}

    <View style = {{ backgroundColor: '#fff', marginTop: 10 ,marginLeft: 1, marginRight: 1, borderRadius: 5, padding: 15,
        flexDirection: "column", alignItems: "center", elevation: 3}}>
         
        <View style = {{ width: '100%', flexDirection: "row"}}>
          <Image source = {require('./src/imagem/capricornio.png')} style={{borderRadius: 50, width: 55, height: 55,
          borderColor: '#F8F8F8', borderWidth: 1, marginLeft: 10}} />
          <Text style ={{marginLeft: 10, fontWeight: 'bold', padding: 15, marginLeft: -10}}> @Capricornio </Text>
          <Text style = {{padding: 15, marginLeft: -30}}>pagou a</Text>
          <Text style = {{fontWeight: 'bold', padding: 15, marginLeft: -30}}> Você </Text>
        </View>
        
        <View style = {{flexDirection: "row", width: '100%', padding: 10}}>
          <Text style = {{fontSize: 15}}>Emprestimo..</Text>
        </View>

{/* Valor e Tempo */}        
      <View style = {{flexDirection: "row", padding: 10, width: '100%', justifyContent: "space-between" }}>
          
          <View style = {{flex: 1, flexDirection: "row"}}> 
            
          <View style = {{}}>
            <Text style = {{color: "#19CB78", fontWeight: 'bold'}}>R$ 20,00</Text>
          </View>
  
          <View style = {{flexDirection: "row", marginLeft: 5, color: '#CACDD2', padding: 2}}>
            <Text style = {{}}>|</Text>
          </View>
            
          <View style = {{flex: 3, flexDirection: "row"}}>
            <Image source = {require('./src/imagem/tempo.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
            <Text style={{color: '#CACDD2', padding: 2}}> 30 minutos</Text>
          </View>  
  
          </View>   
            
  {/* Comentario e favotiro */}
          <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
  
              <View style = {{flexDirection: "row", marginRight: 20 }}>
                <Image source = {require('./src/imagem/caixa.png')} style={{width: 25, height: 25}}/>
                <Text style={{color: '#CACDD2', padding: 2}}> 5 </Text>
              </View>
          
              <View style = {{flexDirection: "row"}}>
               <Image source = {require('./src/imagem/coracao.png')} style={{width: 25, height: 25}}/>
               <Text style={{color: '#CACDD2', padding: 2}}> 15 </Text>
              </View>
          
          </View>
        
        </View>


    </View>
{/* //quadrado 03 */}

{/* quadrado 4 */}

<View style = {{ backgroundColor: '#fff', marginTop: 10 ,marginLeft: 1, marginRight: 1, borderRadius: 5, padding: 15,
        flexDirection: "column", alignItems: "center", elevation: 3}}>
         
        <View style = {{ width: '100%', flexDirection: "row"}}>
          <Image source = {require('./src/imagem/aquario.png')} style={{borderRadius: 50, width: 55, height: 55,
          borderColor: '#F8F8F8', borderWidth: 1, marginLeft: 10}} />
          <Text style ={{marginLeft: 10, fontWeight: 'bold', padding: 15, marginLeft: -10}}> @Aquario </Text>
          <Text style = {{padding: 15, marginLeft: -30}}>pagou a</Text>
          <Text style = {{fontWeight: 'bold', padding: 15, marginLeft: -30}}> @Leão </Text>
        </View>

{/* Valor e Tempo */}        
      <View style = {{flexDirection: "row", padding: 10, width: '100%', justifyContent: "space-between" }}>
          
          <View style = {{flex: 1, flexDirection: "row"}}>  
                     
          <View style = {{flex: 3, flexDirection: "row"}}>
            <Image source = {require('./src/imagem/tempo.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
            <Text style={{color: '#CACDD2', padding: 2}}> 40 minutos</Text>
          </View>  
  
          </View>   
            
  {/* Comentario e favotiro */}
          <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
  
              <View style = {{flexDirection: "row", marginRight: 20 }}>
                <Image source = {require('./src/imagem/caixa.png')} style={{width: 25, height: 25}}/>
                <Text style={{color: '#CACDD2', padding: 2}}> 10 </Text>
              </View>
          
              <View style = {{flexDirection: "row"}}>
               <Image source = {require('./src/imagem/coracao1.png')} style={{width: 25, height: 25}}/>
               <Text style={{color: '#CACDD2', padding: 2}}> 2 </Text>
              </View>
          
          </View>
        
        </View>


    </View>
{/* //quadrado 04 */}

{/* quadrado 5 */}

<View style = {{ backgroundColor: '#fff', marginTop: 10 ,marginLeft: 1, marginRight: 1, borderRadius: 5, padding: 15,
        flexDirection: "column", alignItems: "center", elevation: 3}}>
         
        <View style = {{ width: '100%', flexDirection: "row"}}>
          <Image source = {require('./src/imagem/sagitario.png')} style={{borderRadius: 50, width: 55, height: 55,
          borderColor: '#F8F8F8', borderWidth: 1, marginLeft: 10}} />
          <Text style ={{marginLeft: 10, fontWeight: 'bold', padding: 15, marginLeft: -10}}> @Sagitario </Text>
          <Text style = {{padding: 15, marginLeft: -30}}>pagou a</Text>
          <Text style = {{fontWeight: 'bold', padding: 15, marginLeft: -30}}> @Virgem </Text>
        </View>

{/* Valor e Tempo */}        
      <View style = {{flexDirection: "row", padding: 10, width: '100%', justifyContent: "space-between" }}>
          
          <View style = {{flex: 1, flexDirection: "row"}}>  
                     
          <View style = {{flex: 3, flexDirection: "row"}}>
            <Image source = {require('./src/imagem/tempo.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
            <Text style={{color: '#CACDD2', padding: 2}}> 1 semana atrás</Text>
          </View>  
  
          </View>   
            
  {/* Comentario e favotiro */}
          <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
  
              <View style = {{flexDirection: "row", marginRight: 20 }}>
                <Image source = {require('./src/imagem/caixa.png')} style={{width: 25, height: 25}}/>
                <Text style={{color: '#CACDD2', padding: 2}}> 2 </Text>
              </View>
          
              <View style = {{flexDirection: "row"}}>
               <Image source = {require('./src/imagem/coracao.png')} style={{width: 25, height: 25}}/>
               <Text style={{color: '#CACDD2', padding: 2}}> 9 </Text>
              </View>
          
          </View>
        
        </View>


    </View>
{/* //quadrado 5 */}    

{/* quadrado 6 */}

<View style = {{ backgroundColor: '#fff', marginTop: 10 ,marginLeft: 1, marginRight: 1, borderRadius: 5, padding: 15,
        flexDirection: "column", alignItems: "center", elevation: 3}}>
         
        <View style = {{ width: '100%', flexDirection: "row"}}>
          <Image source = {require('./src/imagem/libra.png')} style={{borderRadius: 50, width: 55, height: 55,
          borderColor: '#F8F8F8', borderWidth: 1, marginLeft: 10}} />
          <Text style ={{marginLeft: 10, fontWeight: 'bold', padding: 15, marginLeft: -10}}> @Libra </Text>
          <Text style = {{padding: 15, marginLeft: -30}}>pagou a</Text>
          <Text style = {{fontWeight: 'bold', padding: 15, marginLeft: -30}}> Você </Text>
        </View>
        
        <View style = {{flexDirection: "row", width: '100%', padding: 10}}>
          <Text style = {{fontSize: 15}}>Estamos Kite</Text>
        </View>

{/* Valor e Tempo */}        
      <View style = {{flexDirection: "row", padding: 10, width: '100%', justifyContent: "space-between" }}>
          
          <View style = {{flex: 1, flexDirection: "row"}}> 
            
          <View style = {{}}>
            <Text style = {{color: "#19CB78", fontWeight: 'bold'}}>R$ 50,00</Text>
          </View>
  
          <View style = {{flexDirection: "row", marginLeft: 5, color: '#CACDD2', padding: 2}}>
            <Text style = {{}}>|</Text>
          </View>
            
          <View style = {{flex: 3, flexDirection: "row"}}>
            <Image source = {require('./src/imagem/tempo.png')} style={{width: 25, height: 25, marginLeft: 5}}/>
            <Text style={{color: '#CACDD2', padding: 2, fontSize: 12}}> 1 semana atrás</Text>
          </View>  
  
          </View>   
            
  {/* Comentario e favotiro */}
          <View style = {{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
  
              <View style = {{flexDirection: "row", marginRight: 20 }}>
                <Image source = {require('./src/imagem/caixa.png')} style={{width: 25, height: 25}}/>
                <Text style={{color: '#CACDD2', padding: 2}}> 8 </Text>
              </View>
          
              <View style = {{flexDirection: "row"}}>
               <Image source = {require('./src/imagem/coracao1.png')} style={{width: 25, height: 25}}/>
               <Text style={{color: '#CACDD2', padding: 2}}> 1 </Text>
              </View>
          
          </View>
        
        </View>

    </View>
{/* //quadrado 6 */}
  </View>
</ScrollView>
  

{/* botao pagar */}
<View style = {{marginTop: 580, alignSelf: "center", position: "absolute" }}>
    <Image source = {require('./src/imagem/pagar.png')} style={{width: 70, height: 75, marginTop: 70}}/>
</View> 


<View style = {{borderTopWidth: 0.5, borderColor: '#ABACB1',flexDirection: "row", justifyContent: "center" }}>
  <View style = {{flex: 2, flexDirection: "row", }}>  
    <Image source = {require('./src/imagem/inicio.png')} style={{width: 40, height: 45, marginLeft: 30, 
    marginTop: 5, marginBottom: 5}}/>
    <Image source = {require('./src/imagem/carteira.png')} style={{width: 40, height: 45, marginLeft: 30,
    marginTop: 5, marginBottom: 5}}/>
  </View>
  <View style = {{flex: 2, flexDirection: "row"}}>
  <Image source = {require('./src/imagem/notificacao.png')} style={{width: 40, height: 45, marginTop: 5, marginBottom: 5,
     marginLeft: 60}}/>
    <Image source = {require('./src/imagem/ajuste.png')} style={{width: 40, height: 45, marginTop: 5, marginBottom: 5,
     marginLeft: 30}}/> 
  </View>         
</View>

</View>

  )
}
}

