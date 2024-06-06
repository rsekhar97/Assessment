/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavSearchBar () {

  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
}

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.iconContainer}>
          <Icon name = {'search-outline'} size={30}/>
        </View>
        <TouchableOpacity onPress={toggleNavbar} style={styles.iconContainer}>
          <Icon name={navbarOpen ? 'close' : 'menu'} size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {navbarOpen && (
        <View style={styles.menu}>
          <ScrollView style={styles.menuItem}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Aeon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Showcase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Docs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Commerce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Templates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Enterprise</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    marginLeft: 10,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
  },
  menu: {
    padding: 10,
  },
});
