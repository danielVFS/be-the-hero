import { StyleSheet } from 'react-native';
import Constants  from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20   
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFF',
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },
  
  contactBox: {
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },

  heroTitle: {
    fontSize: 20,
    lineHeight: 30,
    color: '#13131a',
    fontWeight: 'bold'
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 10,
    lineHeight: 24
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold'
  }



});