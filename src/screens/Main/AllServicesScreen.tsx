import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
import { popularProducts, recommendedProducts } from '../../data/productData';

const { width } = Dimensions.get("window");



export default function AllServicesScreen({ navigation }) {
  const allProducts = [...popularProducts, ...recommendedProducts];

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.heading}>All Services</Text>
          <Text style={styles.subheading}>{allProducts.length} items</Text>
        </View>

        <View style={styles.grid}>
          {allProducts.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("BookingScreen", {
                  title: item.title,
                  price: item.price,
                  image: item.image,
                  desc: item.desc,
                  time: item.time,
                  rating: item.rating,
                })
              }
            >
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>
              </View>
              
              <View style={styles.cardContent}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.deliveryTime}>{item.time}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>{item.price}</Text>
                  <View style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  
  container: {
    flex: 1,
  },
  
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 30,
  },
  
  header: {
    marginBottom: 24,
  },
  
  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A1A",
    letterSpacing: -0.5,
  },
  
  subheading: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    fontWeight: "500",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: width * 0.44,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },

  imageContainer: {
    position: "relative",
    backgroundColor: "#F5F5F5",
  },

  image: {
    width: "100%",
    height: 130,
    resizeMode: "cover",
  },

  ratingBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  ratingText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  cardContent: {
    padding: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
    lineHeight: 20,
  },

  deliveryTime: {
    fontSize: 11,
    color: "#888",
    marginBottom: 10,
    fontWeight: "500",
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0E7F3D",
    letterSpacing: -0.3,
  },

  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#0E7F3D",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#0E7F3D",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: -1,
  },
});