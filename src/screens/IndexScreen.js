import React, { useContext } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";

import { Context } from "../context/BlogContext";

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                state={data}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
