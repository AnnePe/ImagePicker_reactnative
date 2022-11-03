import {  StyleSheet, View} from 'react-native';
import UploadScreen from './scr/UploadScreen';

export default function App() {
 /*const [hasGalleryPermission, sethasGalleryPermission]=useState (null);
  const [image,setImage]=useState(null);


  useEffect(() => {
   
    (async() => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      sethasGalleryPermission(galleryStatus.status==='granted');

    })();
             
      },[]);
  const pickImage = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1,
    });
    console.log(result);
    if(!result.cancelled){
      setImage(result.uri);
    }
  };

  if (hasGalleryPermission===false){
    return <Text>No access</Text>
  }
*/
  return (
    <View style={styles.container}>
      <UploadScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
});

