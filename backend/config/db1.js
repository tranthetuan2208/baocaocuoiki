import sql from 'mssql';

const config = {
  server: 'LENOVO', // Tên máy chủ SQL Server
  database: 'banhang', // Tên cơ sở dữ liệu
  options: {
    trustServerCertificate: true, // Sử dụng Windows Authentication
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('SQL Server Connected');
  } catch (error) {
    
    //console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
