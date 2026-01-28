import axios from 'axios';
import { Site } from './site';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const siteService = {
  async getByDomain(domain: string): Promise<Site> {
    try {
      const response = await axios.get(`${API_URL}/sites/config`, {
        params: { domain },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching site config:', error);
      throw error;
    }
  },

  async getAll(): Promise<Site[]> {
    try {
      const response = await axios.get(`${API_URL}/sites`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sites:', error);
      throw error;
    }
  },

  async update(id: number, data: Partial<Site>): Promise<Site> {
    try {
      const response = await axios.put(`${API_URL}/sites/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating site:', error);
      throw error;
    }
  },
};