import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Productos = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const nav = useNavigation();

    useEffect(() => {
        setLoading(true);
        fetch('https://apiequipo.vercel.app/api/productos/')
            .then(res => res.json())
            .then(dat => {
                setData(dat);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching data:', error);
            });
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.card} onPress={() => nav.navigate('Producto', { id: item._id })}>
                <Image style={styles.image} source={{ uri: item.ruta }} />
                <Text style={styles.title}>{item.nombre}</Text>
                <Text style={styles.price}>Precio: {item.precio}</Text>
            </Pressable>
        );
    };

    const filteredData = data ? data.filter(item => item.nombre.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Catálogo de Productos</Text>
            <View style={styles.header}>
                <TextInput
                    placeholder="Buscar productos..."
                    style={styles.searchInput}
                    placeholderTextColor="#666666"
                    onChangeText={text => setSearchTerm(text)}
                />
            </View>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color={'#EF8E7D'} />
                    <Text>Cargando Datos...</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item._id.toString()}
                    contentContainerStyle={styles.productList}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF7E1',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    header: {
        marginBottom: 20,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#CCCC',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productList: {
        paddingBottom: 20,
    },
    card: {
        marginBottom: 20,
        backgroundColor: '#FEF7E1',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        padding: 15,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200, // Ajusta el tamaño de la imagen según tu preferencia
        borderRadius: 10,
        resizeMode: 'contain', // Esto asegura que la imagen se ajuste al contenedor sin perder calidad
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#666666',
    },
});

export default Productos;
