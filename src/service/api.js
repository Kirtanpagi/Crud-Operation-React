// import axios from 'axios';
import axios from 'axios'

const API_URL = 'http://127.0.0.1:3002/user';
export const addStudent = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log(`Error while calling addUser api`, error.message);
  }

}

export const getStudent = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log('error while calling getStudent api', error.message);
  }

}

export const getSingleStudent = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`)
  } catch (error) {
    console.log('error while calling getSingleStudent api', error.message);
  }

}

export const editStudent = async (data,id) => {
  try {
    return await axios.put(`${API_URL}/${id}`,data);
  } catch (error) {
    console.log('error while calling getSingleStudent api', error.message);
  }

}

export const deleteStudent=async(id)=>{
  try{
    return await axios.delete(`${API_URL}/${id}`)
  }
  catch(error){
    console.log(`Error while callingdelete student`,error.message);
  }
}