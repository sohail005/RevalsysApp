import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../../src/components/typography/text.component";
import { Button, TextInput } from "react-native-paper";
import { Popover } from "@material-ui/core";
/* const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
 */
export const FeedbackScreen = ({ navigation }) => {
  /* const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null); */

  /*  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  }; */

  /* useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
 */

  return (
    <View
      style={{ justifyContent: "center", width: "90%", alignSelf: "center" }}
    >
      <Text style={{ fontSize: 20, alignSelf: "center" }}>Feedback</Text>

      <TextInput label="Name" autoCapitalize="none" />
      <TextInput
        label="E-mail"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => this.setState({ username: text })}
      />
      <TextInput label="Mobile Number" autoCapitalize="none" />
      <TextInput
        style={{ height: 150 }}
        label="Write Your Feedback Here"
        autoCapitalize="none"
      />
      <Button
        style={{ marginTop: 20, height: 50, justifyContent: "center" }}
        icon="rocket"
        mode="contained"
        onPress={() => alert("Your Feedback Has been Submitted Succecfully")}
      >
        Submit
      </Button>
      {/* <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer> */}

      {/* <List.Section> */}
      {/* <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        /> */}
      {/* <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        /> */}
      {/* </List.Section> */}
    </View>
  );
};
