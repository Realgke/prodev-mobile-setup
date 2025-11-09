import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const HomeRootLayout = () => {
return(
    <Tabs screenOptions ={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
    }} >
        {/* Home Tab */}
        <Tabs.Screen name ="index" options={{
         title: 'Home',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}></Tabs.Screen>

        {/* search tab */}
        <Tabs.Screen name = "search" options={{
        title: 'Search',
        headerShown: true,
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}></Tabs.Screen>

        {/* Saved Tab */}
        <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: true,
        tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />
        }}></Tabs.Screen>

         {/* Inbox Tab */}
           <Tabs.Screen name="inbox" options={{
        title: 'Inbox',
        headerShown: true,
        tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
      }} />

      {/* Profile Tab */}
        <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: true,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
      }} />

    </Tabs>
)
}
export default HomeRootLayout;