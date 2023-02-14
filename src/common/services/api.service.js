const API = require("../configs/api.config");

class ApiService {
  constructor() {
    this.api = API;
  }

  async getYoungTalentPrograms() {
    try {
      const { data } = await this.api.get("/young-talent-programs");

      return data;
    } catch (error) {
      return [
        {
          name: "Ahmet",
          job: "ahmet",
          img: "https://i.pinimg.com/originals/2d/a9/bf/2da9bf394c50ac97c459308df8cadd50.jpg",
          description: "ahmet ahmet ahmet ahmet ahmet ahmet ahmet",
        },
      ];
    }
  }

  async getPostings() {
    try {
      const { data } = await this.api.get("/postings");

      return data;
    } catch (error) {
      console.error(error);

      // If there is an error, return a mock data
      return [
        {
          name: "Ahmet",
          job: "ahmet",
          img: "https://i.pinimg.com/originals/2d/a9/bf/2da9bf394c50ac97c459308df8cadd50.jpg",
          description: "ahmet ahmet ahmet ahmet ahmet ahmet ahmet",
        },
      ];
    }
  }

  async getBlogs() {
    try {
      const { data } = await this.api.get("/Blogs");

      return data;
    } catch (error) {
      console.error(error);

      // If there is an error, return a mock data
      return [
        {
          slug: "/blgos/blogsDetails",
          img: "https://i.pinimg.com/originals/2d/a9/bf/2da9bf394c50ac97c459308df8cadd50.jpg",
          title: "4 Learning Management System Design Tips...",
          description: "lorem ipsum",
          created_at: "2021-05-01",
        },
      ];
    }
  }

  async getBlogs() {
    try {
      const { data } = await this.api.get("/blogsdetails");

      return data;
    } catch (error) {
      console.error(error);

      // If there is an error, return a mock data
      return [
        {
          slug: "/blogs/blogsDetails",
          img: "https://i.pinimg.com/originals/2d/a9/bf/2da9bf394c50ac97c459308df8cadd50.jpg",
          title: "4 Learning Management System Design Tips...",
          description: "lorem ipsum",
          created_at: "2021-05-01",
        },
      ];
    }
  }
}

module.exports = new ApiService();
