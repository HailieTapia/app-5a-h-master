import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView } from 'react-native';

const Producto = ({ route }) => {
    const { id } = route.params;
    const [dato, setDato] = useState(null);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://apiequipo.vercel.app/api/productos/' + id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Producto no encontrado');
                }
            })
            .then(obj => {
                setDato(obj);
                setLoad(true);
            })
            .catch(() => {
                setError(true);
            });
    }, []);

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Producto no encontrado</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {load ? (
                <View style={styles.productoContainer}>
                    <Image source={{ uri: dato.ruta }} style={styles.image} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{dato.nombre}</Text>
                        <Text style={styles.price}>Precio: {dato.precio}</Text>
                        <Text style={styles.description}>{dato.descripcion}</Text>
                        <Text style={styles.category}>Categoría: {dato.categoria}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#666666" />
                    <Text style={styles.loadingText}>Cargando Datos...</Text>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    productoContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    detailsContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 10,
    },
    category: {
        fontSize: 16,
        color: '#666666',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        marginTop: 10,
        color: '#666666',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default Producto;
