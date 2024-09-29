export const eCommercePlatform = {
    products: [
      {
        productId: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 79.99,
        stock: 150,
        description: "High-quality wireless headphones with noise cancellation.",
        specifications: {
          brand: "SoundX",
          model: "SX-200",
          batteryLife: "20 hours",
          connectivity: "Bluetooth 5.0"
        },
        images: [
          { url: "https://example.com/images/headphones1.jpg", alt: "Wireless Headphones" },
          { url: "https://example.com/images/headphones2.jpg", alt: "Headphones Side View" }
        ],
        reviews: [
          {
            reviewer: "Alice Smith",
            rating: 5,
            comment: "Amazing sound quality and very comfortable!"
          },
          {
            reviewer: "John Doe",
            rating: 4,
            comment: "Great headphones but could use better battery life."
          }
        ],
        dateAdded: "2023-09-01",
        tags: ["audio", "wireless", "headphones"]
      },
      {
        productId: 2,
        name: "Smartphone Case",
        category: "Accessories",
        price: 19.99,
        stock: 300,
        description: "Durable and stylish smartphone case for protection.",
        specifications: {
          brand: "CaseMate",
          model: "CM-5000",
          compatibility: "iPhone 13"
        },
        images: [
          { url: "https://example.com/images/case1.jpg", alt: "Smartphone Case" },
          { url: "https://example.com/images/case2.jpg", alt: "Case Back View" }
        ],
        reviews: [
          {
            reviewer: "Sarah Connor",
            rating: 4,
            comment: "Fits perfectly and looks great!"
          },
          {
            reviewer: "David Beckham",
            rating: 5,
            comment: "Best case I’ve ever owned!"
          }
        ],
        dateAdded: "2023-09-05",
        tags: ["accessory", "protection", "smartphone"]
      },
      {
        productId: 3,
        name: "4K Ultra HD Smart TV",
        category: "Electronics",
        price: 699.99,
        stock: 80,
        description: "Experience stunning picture quality with our new Smart TV.",
        specifications: {
          brand: "VisionPro",
          model: "VP-4K55",
          screenSize: "55 inches",
          resolution: "3840 x 2160"
        },
        images: [
          { url: "https://example.com/images/tv1.jpg", alt: "4K Ultra HD Smart TV" },
          { url: "https://example.com/images/tv2.jpg", alt: "TV Side View" }
        ],
        reviews: [
          {
            reviewer: "Emma Watson",
            rating: 5,
            comment: "Absolutely love the picture quality!"
          },
          {
            reviewer: "Liam Neeson",
            rating: 4,
            comment: "Great TV but setup was a bit complicated."
          }
        ],
        dateAdded: "2023-09-10",
        tags: ["electronics", "TV", "smart"]
      },
      {
        productId: 4,
        name: "Gaming Laptop",
        category: "Computers",
        price: 1299.99,
        stock: 50,
        description: "Powerful gaming laptop with high-performance specs.",
        specifications: {
          brand: "GamerPro",
          model: "GP-XT",
          processor: "Intel i7",
          ram: "16GB",
          storage: "512GB SSD"
        },
        images: [
          { url: "https://example.com/images/laptop1.jpg", alt: "Gaming Laptop" },
          { url: "https://example.com/images/laptop2.jpg", alt: "Laptop Open View" }
        ],
        reviews: [
          {
            reviewer: "Sophia Loren",
            rating: 5,
            comment: "The performance is outstanding!"
          },
          {
            reviewer: "Oliver Twist",
            rating: 4,
            comment: "A bit heavy but great for gaming."
          }
        ],
        dateAdded: "2023-09-15",
        tags: ["gaming", "laptop", "computers"]
      },
      {
        productId: 5,
        name: "Ergonomic Office Chair",
        category: "Furniture",
        price: 249.99,
        stock: 120,
        description: "Comfortable and adjustable office chair for long hours.",
        specifications: {
          brand: "ComfortZone",
          model: "CZ-9000",
          material: "Mesh",
          weightCapacity: "300 lbs"
        },
        images: [
          { url: "https://example.com/images/chair1.jpg", alt: "Office Chair" },
          { url: "https://example.com/images/chair2.jpg", alt: "Chair Side View" }
        ],
        reviews: [
          {
            reviewer: "Ava Gardner",
            rating: 5,
            comment: "Super comfortable for work from home!"
          },
          {
            reviewer: "Isabella Rossellini",
            rating: 4,
            comment: "Good chair, but the assembly was tricky."
          }
        ],
        dateAdded: "2023-09-20",
        tags: ["furniture", "office", "chair"]
      },
      {
        productId: 6,
        name: "Bluetooth Smart Scale",
        category: "Health & Fitness",
        price: 39.99,
        stock: 200,
        description: "Track your weight and body composition with ease.",
        specifications: {
          brand: "FitTrack",
          model: "FT-3000",
          connectivity: "Bluetooth",
          compatibleApps: ["Fitbit", "Apple Health"]
        },
        images: [
          { url: "https://example.com/images/scale1.jpg", alt: "Smart Scale" },
          { url: "https://example.com/images/scale2.jpg", alt: "Scale Display" }
        ],
        reviews: [
          {
            reviewer: "John Doe",
            rating: 5,
            comment: "Very accurate and easy to use."
          },
          {
            reviewer: "Michael Thompson",
            rating: 4,
            comment: "Syncs well with my fitness apps."
          }
        ],
        dateAdded: "2023-09-25",
        tags: ["health", "fitness", "scale"]
      },
      {
        productId: 7,
        name: "Wireless Charging Pad",
        category: "Electronics",
        price: 24.99,
        stock: 250,
        description: "Convenient wireless charging for your devices.",
        specifications: {
          brand: "ChargeTech",
          model: "CT-100",
          compatibility: "Qi-enabled devices"
        },
        images: [
          { url: "https://example.com/images/charger1.jpg", alt: "Wireless Charger" },
          { url: "https://example.com/images/charger2.jpg", alt: "Charger on Desk" }
        ],
        reviews: [
          {
            reviewer: "Liam Neeson",
            rating: 4,
            comment: "Works great but a bit slow."
          },
          {
            reviewer: "John Doe",
            rating: 5,
            comment: "Very convenient and stylish!"
          }
        ],
        dateAdded: "2023-09-30",
        tags: ["electronics", "accessory", "charger"]
      },
      {
        productId: 8,
        name: "Organic Green Tea",
        category: "Food & Beverage",
        price: 14.99,
        stock: 150,
        description: "Premium organic green tea for a refreshing experience.",
        specifications: {
          brand: "Nature's Best",
          type: "Loose Leaf",
          weight: "200 grams"
        },
        images: [
          { url: "https://example.com/images/tea1.jpg", alt: "Green Tea" },
          { url: "https://example.com/images/tea2.jpg", alt: "Tea in Cup" }
        ],
        reviews: [
          {
            reviewer: "Sophia Loren",
            rating: 5,
            comment: "Best green tea I’ve ever tasted!"
          },
          {
            reviewer: "Emma Watson",
            rating: 4,
            comment: "Good quality, but a bit pricey."
          }
        ],
        dateAdded: "2023-10-01",
        tags: ["food", "beverage", "tea"]
      },
      {
        productId: 9,
        name: "Leather Wallet",
        category: "Accessories",
        price: 49.99,
        stock: 180,
        description: "Stylish leather wallet with multiple card slots.",
        specifications: {
          brand: "Luxury Goods",
          material: "Genuine Leather",
          dimensions: "4.5 x 3.5 inches"
        },
        images: [
          { url: "https://example.com/images/wallet1.jpg", alt: "Leather Wallet" },
          { url: "https://example.com/images/wallet2.jpg", alt: "Wallet Open" }
        ],
        reviews: [
          {
            reviewer: "David Beckham",
            rating: 5,
            comment: "Looks classy and is very functional."
          },
          {
            reviewer: "John Doe",
            rating: 4,
            comment: "Good wallet, but it could be a bit slimmer."
          }
        ],
        dateAdded: "2023-10-05",
        tags: ["accessory", "wallet", "leather"]
      },
      {
        productId: 10,
        name: "Stainless Steel Water Bottle",
        category: "Health & Fitness",
        price: 29.99,
        stock: 220,
        description: "Durable and eco-friendly water bottle for daily use.",
        specifications: {
          brand: "EcoLife",
          material: "Stainless Steel",
          capacity: "750 ml"
        },
        images: [
          { url: "https://example.com/images/bottle1.jpg", alt: "Water Bottle" },
          { url: "https://example.com/images/bottle2.jpg", alt: "Bottle in Hand" }
        ],
        reviews: [
          {
            reviewer: "Alice Smith",
            rating: 5,
            comment: "Keeps my drinks cold for hours!"
          },
          {
            reviewer: "Sarah Connor",
            rating: 4,
            comment: "Good quality, but the lid could be better."
          }
        ],
        dateAdded: "2023-10-10",
        tags: ["fitness", "water bottle", "eco-friendly"]
      }
    ],
    categories: [
      { categoryId: 1, name: "Electronics" },
      { categoryId: 2, name: "Accessories" },
      { categoryId: 3, name: "Computers" },
      { categoryId: 4, name: "Furniture" },
      { categoryId: 5, name: "Health & Fitness" },
      { categoryId: 6, name: "Food & Beverage" }
    ],
    userStats: {
      totalUsers: 5000,
      totalOrders: 12000,
      totalRevenue: 1500000,
      averageOrderValue: 125.00,
      mostPopularProduct: "Wireless Bluetooth Headphones"
    }
  };