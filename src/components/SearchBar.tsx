import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ searchQuery, setSearchQuery, clearSearch }) => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.iconBox}>
        <Ionicons name="search-outline" size={22} color="#fff" />
      </View>

      <TextInput
        placeholder="Search"
        placeholderTextColor="#999"
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {searchQuery ? (
        <TouchableOpacity onPress={clearSearch}>
          <Ionicons name="close-circle" size={22} color="#666" />
        </TouchableOpacity>
      ) : (
        <Ionicons name="options-outline" size={22} color="#666" />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 14,
    borderRadius: 14,
    marginTop: 20,
  },
  iconBox: {
    backgroundColor: '#0E7F3D',
    padding: 8,
    borderRadius: 10,
  },
  input: { marginLeft: 12, flex: 1, fontSize: 15, color: '#1A1A1A' },
});
