import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const PesquisarImovel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://10.137.11.212:8000/api/imovel/search?q=${searchTerm}`);
      setImoveis(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Pesquisar Imóveis</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        placeholder="Digite o termo de busca"
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text style={{ fontSize: 18, color: 'blue' }}>Pesquisar</Text>
      </TouchableOpacity>
      {loading? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={imoveis}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
              <Text style={{ fontSize: 18 }}>{item.estado} - {item.cidade}</Text>
              <Text style={{ fontSize: 16 }}>{item.descricao}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default PesquisarImovel;