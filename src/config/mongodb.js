  import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await connect('mongodb+srv://ULIM-215:informatica@cluster0.x5cesv8.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to database');
  } catch (error) {
    console.error('Connection error:', error);
    throw error;
  }
}