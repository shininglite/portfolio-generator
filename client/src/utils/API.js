import axios from "axios";

export default {
    // Gets all saved Portfolios
    getDeveloper: function (id) {
        return axios.get("/api/developer/" + id);
    },
    // Saves an Portfolio to the database
    //   savePortfolio: function (PortfolioData) {
    //     return axios.post("/api/Portfolio", portfolioData);
    //   },
};
