import { StyleSheet, View, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";

const Header = ({ fullName, ownerAvatarUrl, description, language }) => {
  const headerStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
  });
  const Avatar = () => {
    const avaterStyles = StyleSheet.create({
      container: {
        padding: 10,
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 5,
      },
    });

    return (
      <View style={avaterStyles.container}>
        <Image
          style={avaterStyles.image}
          source={{
            uri: ownerAvatarUrl,
          }}
        />
      </View>
    );
  };
  const HeaderText = () => {
    const styles = StyleSheet.create({
      container: {
        paddingTop: 5,
      },
      name: {
        paddingTop: 5,
        paddingBottom: 5,
      },
    });
    const Name = () => {
      return (
        <View>
          <Text fontSize="subheading" fontWeight="bold" style={styles.name}>
            {fullName}
          </Text>
        </View>
      );
    };
    const Description = () => {
      const descriptionStyles = StyleSheet.create({
        text: {
          paddingBottom: 5,
        },
      });
      return (
        <View>
          <Text color="textSecondary" style={descriptionStyles.text}>
            {description}
          </Text>
        </View>
      );
    };
    const Language = () => {
      const languageStyles = StyleSheet.create({
        container: {
          alignItems: "flex-start",
        },
        text: {
          padding: 5,
          color: "white",
          backgroundColor: theme.colors.primary,
          overflow: "hidden",
          borderRadius: 5,
        },
      });
      return (
        <View style={languageStyles.container}>
          <Text style={languageStyles.text}>{language}</Text>
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <Name />
        <Description />
        <Language />
      </View>
    );
  };

  return (
    <View style={headerStyles.container}>
      <Avatar />
      <HeaderText />
    </View>
  );
};

const Footer = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const footerStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingTop: 10,
      paddingBottom: 10,
    },
  });
  const Stat = ({ count, children }) => {
    console.log(count);
    const shortenedCount = () => {
      if (count >= 10 ** 6) {
        const num = Math.trunc(count / 10 ** 5) / 10;
        return `${num}M`;
      }
      if (count >= 1000) {
        const num = Math.trunc(count / 100) / 10;
        return `${num}k`;
      }

      return count;
    };
    console.log(shortenedCount());
    return (
      <View>
        <Text fontSize="subheading" fontWeight="bold">
          {shortenedCount()}
        </Text>
        <Text color="textSeondary">{children}</Text>
      </View>
    );
  };
  return (
    <View style={footerStyles.container}>
      <Stat count={stargazersCount}>Stars</Stat>
      <Stat count={forksCount}>Forks</Stat>
      <Stat count={reviewCount}>Reviews</Stat>
      <Stat count={ratingAverage}>Rating</Stat>
    </View>
  );
};

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  const itemStyles = StyleSheet.create({
    container: {
      alignItems: "stretch",
      backgroundColor: "#FFFFFF",
    },
  });
  const headerProps = {
    fullName,
    ownerAvatarUrl,
    description,
    language,
  };
  const footerProps = {
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
  };
  return (
    <View style={itemStyles.container}>
      <Header {...headerProps} />
      <Footer {...footerProps} />
    </View>
  );
};

export default RepositoryItem;
