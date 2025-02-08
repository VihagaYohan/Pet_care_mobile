import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SectionList,
} from 'react-native';
import React from 'react';
import {XMarkIcon} from 'react-native-heroicons/outline';

// components
import {AppGradientBackground, AppText} from '../components';

// constants
import {COLORS, CONSTANTS} from '../constants';

// data
import {SpecialityList} from '../data/';

interface propTypes {
  visible: boolean;
  onClose: () => void;
}

const SearchWidget = ({visible, onClose}: propTypes) => {
  const TitleSection = () => {
    return (
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <XMarkIcon color={COLORS.primary} size={30} />
        </TouchableOpacity>

        <AppText label="Select a speciality" textStyle={styles.title} />

        <View style={styles.closeButton} />
      </View>
    );
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <AppGradientBackground containerStyle={styles.contianer}>
        {/* title */}
        <TitleSection />

        {/* specialist list */}
        <SectionList
          sections={SpecialityList}
          keyExtractor={(item, index) => `specialist ${index}`}
          renderItem={({item}) => {
            return <AppText label={item} textStyle={styles.textItem} />;
          }}
          renderSectionHeader={({section: {title}}) => (
            <AppText
              label={title.toUpperCase()}
              textStyle={styles.sectionTitle}
            />
          )}
          ItemSeparatorComponent={() => {
            return <View style={{height: 5}} />;
          }}
        />
      </AppGradientBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contianer: {
    paddingTop: CONSTANTS.spacing.large,
    paddingHorizontal: CONSTANTS.spacing.medium,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: COLORS.orange1,
    letterSpacing: 1,
    marginTop: CONSTANTS.spacing.large * 2,
  },
  textItem: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});

export default SearchWidget;
