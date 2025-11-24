import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const ServiceSlider = ({ title, data, navigation, mb }) => {
  return (
    <View style={{ marginBottom: mb ? 50 : 0 }}>
      <Text style={styles.title}>{title}</Text>

      {data.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.row}
        >
          {data.map(product => (
            <TouchableOpacity
              key={product.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate('BookingScreen', { ...product })
              }
            >
              <Image source={product.image} style={styles.img} />
              <Text style={styles.cardTitle}>{product.title}</Text>
              <Text style={styles.cardPrice}>{product.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

export default ServiceSlider;

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: '700', marginTop: 25, marginBottom: 12 },
  row: { flexDirection: 'row' },
  card: {
    width: 140,
    marginRight: 16,
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 16,
  },
  img: { width: '100%', height: 90, borderRadius: 12 },
  cardTitle: { marginTop: 10, fontWeight: '600', fontSize: 15 },
  cardPrice: {
    marginTop: 4,
    color: '#0E7F3D',
    fontWeight: '700',
    fontSize: 16,
  },
  empty: { padding: 20, alignItems: 'center' },
  emptyText: { color: '#666' },
});
