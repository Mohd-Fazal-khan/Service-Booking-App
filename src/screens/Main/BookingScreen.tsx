import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

// Sample customer reviews data
const customerReviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: '👩',
    rating: 5,
    date: '2 days ago',
    comment: 'Excellent service! The quality exceeded my expectations and delivery was super fast.',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    avatar: '👨',
    rating: 4,
    date: '1 week ago',
    comment: 'Great value for money. Professional service and good communication throughout.',
  },
  {
    id: 3,
    name: 'Anjali Patel',
    avatar: '👩',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Highly recommended! Very satisfied with the overall experience.',
  },
];

export default function BookingScreen({ route, navigation }) {
  const { title, price, image, desc, time, rating } = route.params;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Text key={index} style={styles.star}>
        {index < Math.floor(rating) ? '⭐' : '☆'}
      </Text>
    ));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header with Back Button and Favorite */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteBtn}>
          <Ionicons name="heart-outline" size={24} color="#0E7F3D" />
        </TouchableOpacity>
      </View>

      {/* Product Image with Badge */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.productImage} />
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingBadgeText}>⭐ {rating}</Text>
        </View>
      </View>

      {/* Title & Price Card */}
      <View style={styles.titleCard}>
        <View style={styles.titleRow}>
          <View style={styles.titleContent}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>{rating}</Text>
              <Text style={styles.ratingCount}>(245 reviews)</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.priceLabel}>Total</Text>
          </View>
        </View>

        {/* Delivery Time Badge */}
        <View style={styles.timeBadge}>
          <Ionicons name="time-outline" size={18} color="#0E7F3D" />
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>

      {/* Quick Info Cards */}
      <View style={styles.quickInfoContainer}>
        <View style={styles.infoCard}>
          <Ionicons name="shield-checkmark" size={24} color="#0E7F3D" />
          <Text style={styles.infoCardText}>Verified</Text>
        </View>
        <View style={styles.infoCard}>
          <Ionicons name="flash" size={24} color="#FFA500" />
          <Text style={styles.infoCardText}>Fast Service</Text>
        </View>
        <View style={styles.infoCard}>
          <Ionicons name="ribbon" size={24} color="#FF6B6B" />
          <Text style={styles.infoCardText}>Top Rated</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      {/* What's Included */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What's Included</Text>
        <View style={styles.includesList}>
          {['Professional Service', 'Quality Guarantee', 'After Service Support', 'Money Back Guarantee'].map((item, index) => (
            <View key={index} style={styles.includeItem}>
              <Ionicons name="checkmark-circle" size={20} color="#0E7F3D" />
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Customer Reviews */}
      <View style={styles.section}>
        <View style={styles.reviewHeader}>
          <Text style={styles.sectionTitle}>Customer Reviews</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {customerReviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewTop}>
              <View style={styles.reviewerInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{review.avatar}</Text>
                </View>
                <View>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
              </View>
              <View style={styles.starsContainer}>
                {renderStars(review.rating)}
              </View>
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}
      </View>

      {/* Book Button */}
      <TouchableOpacity
  style={styles.bookBtn}
  activeOpacity={0.8}
  onPress={() =>
    navigation.navigate('ConfirmBookingScreen', {
      title,
      price,
      image,
      time,
    })
  }
>
  <Text style={styles.bookBtnText}>Book Now</Text>
  <Ionicons name="arrow-forward" size={20} color="#fff" />
</TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },

  backBtn: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  favoriteBtn: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  imageContainer: {
    position: 'relative',
    marginHorizontal: 16,
    marginBottom: 16,
  },

  productImage: {
    width: '100%',
    height: height * 0.28,
    borderRadius: 20,
  },

  ratingBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  ratingBadgeText: {
    fontSize: 14,
    fontWeight: '700',
  },

  titleCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  titleContent: {
    flex: 1,
    marginRight: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 6,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 6,
  },

  ratingCount: {
    fontSize: 14,
    color: '#888',
  },

  priceContainer: {
    alignItems: 'flex-end',
  },

  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0E7F3D',
    marginBottom: 2,
  },

  priceLabel: {
    fontSize: 12,
    color: '#888',
    textTransform: 'uppercase',
  },

  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0E7F3D',
    marginLeft: 6,
  },

  quickInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 20,
  },

  infoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  infoCardText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginTop: 6,
    textAlign: 'center',
  },

  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
  },

  desc: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555',
  },

  includesList: {
    marginTop: 4,
  },

  includeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  includeText: {
    fontSize: 15,
    color: '#444',
    marginLeft: 10,
  },

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  seeAllText: {
    fontSize: 14,
    color: '#0E7F3D',
    fontWeight: '600',
  },

  reviewCard: {
    backgroundColor: '#F8F9FA',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  reviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    fontSize: 20,
  },

  reviewerName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
  },

  reviewDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },

  starsContainer: {
    flexDirection: 'row',
  },

  star: {
    fontSize: 14,
    marginLeft: 2,
  },

  reviewComment: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },

  bookBtn: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#0E7F3D',
    paddingVertical: 16,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0E7F3D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  bookBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
});