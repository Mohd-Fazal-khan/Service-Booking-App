import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: 1, name: 'Weight' },
  { id: 2, name: 'Muscle' },
  { id: 3, name: 'Gym' },
  { id: 4, name: 'Training' },
  { id: 5, name: 'Diet' },
  { id: 1, name: 'Yoga' },
];

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.item,
            selectedCategory === item.name && styles.selectedItem,
          ]}
          onPress={() =>
            setSelectedCategory(
              selectedCategory === item.name ? null : item.name,
            )
          }
        >
          <Text
            style={[
              styles.text,
              selectedCategory === item.name && styles.selectedText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 12,
  },
  selectedItem: { backgroundColor: '#0E7F3D' },
  text: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  selectedText: { color: '#fff' },
});
