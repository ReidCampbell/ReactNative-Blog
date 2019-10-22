import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
