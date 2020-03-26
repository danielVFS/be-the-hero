import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
  headerText: {
    color: '#737380',
    fontSize: 15
  },
  
  headerTextBold: {
    fontWeight: 'bold'
  }, 
  
  title: {
    fontSize: 30,
    marginTop: 48,
    marginBottom: 16,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    color: '#737380',
    lineHeight: 24
  },

  incidentsList: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFF'
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color:'#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  }

});