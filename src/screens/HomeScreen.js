import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
} from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";
import CatagoryComponent from "../components/HomeComponents/CatagoryComponent";
import LakhriFoodCard from "../components/HomeComponents/LakhriFoodCard";
import LakhriItem from "../components/HomeComponents/LakhriItem";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* search box */}
        <View style={styles.search}>
          <View style={styles.menuIconContainer}>
            <Feather name="menu" size={24} color="black" />
          </View>
          <View style={styles.searchContainer}>
            <TextInput placeholder="Search" />
          </View>
        </View>
        {/* search box end */}

        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.welcome}>Welcome to Lakhri food</Text>
            <Text style={styles.welcomeName}>Rakib Hossain</Text>
          </View>
          <View style={styles.filterIConContainer}>
            <Octicons name="settings" size={24} color="black" />
          </View>
        </View>

        <View style={styles.catagoryContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CatagoryComponent title="chicken" />
            <CatagoryComponent title="mutton" />
            <CatagoryComponent title="mutton" />
            <CatagoryComponent title="mutton" />
            <CatagoryComponent title="Kabab paratha" />
            <CatagoryComponent title="ruchi dal vaja" />
            <CatagoryComponent title="Mutton biriyani" />
            <CatagoryComponent title="Kala vuna" />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.lakhriFoodTitle}>Lakhri Food</Text>
          <ScrollView
            style={styles.FoodContainerScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LakhriFoodCard url="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" />
            <LakhriFoodCard url="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.lakhriFoodTitle}>Lakhri Craft</Text>
          <ScrollView
            style={styles.FoodContainerScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LakhriItem url="https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-noodles-vegetables-egg.jpg" />
            <LakhriItem url="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <LakhriItem url="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" />
            <LakhriItem url="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg" />
            <LakhriItem url="https://www.befunky.com/images/wp/wp-2017-11-Food-Photography-7.jpg?auto=webp&format=jpg&width=1136&crop=16:9" />
          </ScrollView>
        </View>
        <View>
          <Text style={styles.lakhriFoodTitle}>Most Ordered</Text>
          <ScrollView
            style={styles.FoodContainerScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LakhriItem url="https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg" />
            <LakhriItem url="https://img.fixthephoto.com/blog/images/gallery/news_fb__image_168.jpg" />
            <LakhriItem url="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <LakhriItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDzKiZbxxKzOJNniLJ0YFB_Kpfnwd5UZsdA&usqp=CAU" />
            <LakhriItem url="https://www.befunky.com/images/wp/wp-2017-11-Food-Photography-7.jpg?auto=webp&format=jpg&width=1136&crop=16:9" />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.lakhriFoodTitle}>Recommended</Text>
          <ScrollView
            style={styles.FoodContainerScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LakhriItem url="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
            <LakhriItem url="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?size=626&ext=jpg" />
            <LakhriItem url="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/12/GettyImages-1247033916_header-1024x575.jpg?w=1155&h=1528" />
            <LakhriItem url="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
            <LakhriItem url="https://img.freepik.com/free-photo/healthy-balanced-vegetarian-food-top-view_1150-37017.jpg?size=626&ext=jpg" />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.lakhriFoodTitle}>Promotion</Text>
          <ScrollView
            style={styles.FoodContainerScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <LakhriItem url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg" />
            <LakhriItem url="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2014/08/01-Food-Photography-Tips.jpg?resize=450%2C600&ssl=1" />
            <LakhriItem url="https://media.istockphoto.com/photos/selection-of-american-food-picture-id931308812?k=6&m=931308812&s=612x612&w=0&h=bIbWqdW3LEc9Q5_WnqYG0blqrKp9zW7Qc36Gq35FTaE=" />
            <LakhriItem url="https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg" />
            <LakhriItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ru_5sa20YAdJgHe4LgLrvCM5SrsohpCZlA&usqp=CAU" />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    height: 90,
  },
  menuIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  searchContainer: {
    backgroundColor: "#EEEEEF",
    flex: 1,
    borderRadius: 6,
    height: 35,
    justifyContent: "center",
    paddingLeft: 10,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcome: {
    color: "#202731",
    fontSize: 16,
  },
  welcomeName: {
    color: "#202731",
    fontSize: 20,
    marginVertical: 10,
  },
  filterIConContainer: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
  catagoryContainer: {
    marginVertical: 10,
  },
  FoodContainerScroll: {
    marginVertical: 10,
  },
  lakhriFoodTitle: {
    marginVertical: 10,
    fontSize: 17,
    fontWeight: "600",
    color: "#202731",
  },
});
