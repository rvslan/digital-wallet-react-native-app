import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';

import { COLORS, SIZES, FONTS, icons, images, countries } from '../constants';

import { LinearGradient } from 'expo-linear-gradient';

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [countryCodes, setCountryCodes] = React.useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = React.useState(null);

  React.useEffect(() => {
    let areaData = countries.map((item) => {
      return {
        code: item.iso,
        name: item.country,
        callingCode: `+${item.code}`,
        flag: `https://countryflagsapi.com/png/${item.iso}`,
      };
    });

    setCountryCodes(areaData);

    if (areaData.length > 0) {
      let defaultCountryIndex = areaData.findIndex(
        (country) => country.code === 'US'
      );

      if (defaultCountryIndex) {
        setSelectedCountryCode(areaData[defaultCountryIndex]);
      }
    }
  }, []);

  const [showModal, setShowModal] = React.useState(false);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 6,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={() => console.log('hello')}
      >
        <Image
          source={icons.back}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.white,
            ...FONTS.h4,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  }

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={images.wallieLogo}
          resizeMode='contain'
          style={{
            width: '60%',
          }}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}
      >
        {/* Full Name */}
        <View
          style={{
            marginTop: SIZES.padding * 3,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body3,
            }}
          >
            Full Name
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder='Enter Full Name'
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>

        {/* Phone Number */}
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body3,
            }}
          >
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            {/* Country Code */}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body2,
              }}
              onPress={() => setShowModal(true)}
            >
              <View
                style={{
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={icons.down}
                  style={{
                    width: 10,
                    height: 10,
                    tintColor: COLORS.white,
                  }}
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  marginLeft: 5,
                }}
              >
                <Image
                  source={{ uri: selectedCountryCode?.flag }}
                  resizeMode='contain'
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  marginLeft: 5,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}
                >
                  {selectedCountryCode?.callingCode}
                </Text>
              </View>
            </TouchableOpacity>

            {/* Phone Number */}
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3,
              }}
              placeholder='Enter Phone Number'
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
              keyboardType='numeric'
              maxLength={10}
            />
          </View>
        </View>

        {/* Password */}
        <View
          style={{
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGreen,
              ...FONTS.body3,
            }}
          >
            Password
          </Text>

          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder='Enter password'
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30,
            }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View
        style={{
          margin: SIZES.padding * 3,
        }}
      >
        <TouchableOpacity
          style={{
            heigth: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text
            style={{
              padding: 20,
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderCountryCodesModal() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            flexDirection: 'row',
          }}
          onPress={() => {
            setSelectedCountryCode(item);
            setShowModal(false);
          }}
        >
          <Image
            source={{
              uri: item.flag,
            }}
            style={{
              width: 30,
              height: 30,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              ...FONTS.body4,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType='slide' transparent={true} visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius,
              }}
            >
              <FlatList
                data={countryCodes}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        style={{ flex: 1 }}
        colors={[COLORS.lime, COLORS.emerald]}
      >
        <ScrollView>
          {/* Header */}
          {renderHeader()}
          {/* Logo */}
          {renderLogo()}
          {/* Form */}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
      {renderCountryCodesModal()}
    </KeyboardAvoidingView>
  );
};

export default SignUp;
