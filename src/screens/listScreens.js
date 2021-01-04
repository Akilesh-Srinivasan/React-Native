import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [{ name: 'akil', age: '10' }, { name: 'balloin', age: '23' }, { name: 'cat', age: '4' }];
    return (
        // to render the items in list
        <FlatList
            keyExtractor={(friend) => friend.name}
            keyExtractor={(friend) => friend.age}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={styles.listStyle}>{item.name} - {item.age}</Text>
                    </View>
                );
            }} />
    );
};

const styles = StyleSheet.create({
    listStyle: {
        marginVertical: 40
    }
});

export default ListScreen;