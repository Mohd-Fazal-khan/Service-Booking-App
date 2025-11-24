import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { popularProducts, recommendedProducts } from '../../data/productData';

// import Header from './Header';
// import SearchBar from './SearchBar';
// import CategoryList from './CategoryList';
// import ProductSlider from './ProductSlider';
import ServiceSlider from '../../components/ServiceSlider';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import CategoryList from '../../components/CategoryList';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    let filteredPopular = popularProducts;
    let filteredRecommended = recommendedProducts;

    const q = searchQuery.trim().toLowerCase();

    if (q !== '') {
      filteredPopular = filteredPopular.filter(p =>
        p.title.toLowerCase().includes(q),
      );
      filteredRecommended = filteredRecommended.filter(p =>
        p.title.toLowerCase().includes(q),
      );
    }

    if (selectedCategory) {
      filteredPopular = filteredPopular.filter(
        p => p.category === selectedCategory,
      );
      filteredRecommended = filteredRecommended.filter(
        p => p.category === selectedCategory,
      );
    }

    return { popular: filteredPopular, recommended: filteredRecommended };
  }, [searchQuery, selectedCategory]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        clearSearch={() => {
          setSearchQuery('');
          setSelectedCategory(null);
        }}
      />

      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ServiceSlider
        title="Popular Products"
        data={filteredProducts.popular}
        navigation={navigation}
      />

      <ServiceSlider
        title="Recommended For You"
        data={filteredProducts.recommended}
        navigation={navigation}
        mb
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
});
