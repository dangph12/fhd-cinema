import { clients, folders, pricingPlans, projects, tasks, teams, users } from '@/assets/data/other';
import { customers, ordersData, products } from '@/assets/data/products';
import { sleep } from '@/utils/promise';
export const getAllClients = async () => {
  const data = clients.map(client => {
    const user = users.find(user => user.id === client.userId);
    return {
      ...client,
      user
    };
  });
  await sleep();
  return data;
};
export const getAllOrderItems = async () => {
  const data = ordersData.map(order => {
    const product = products.find(product => product.id === order.productId);
    return {
      ...order,
      product
    };
  });
  await sleep();
  return data;
};
export const getUserById = async id => {
  const data = users.find(user => user.id === id);
  await sleep();
  return data;
};
export const getAllUsers = async () => {
  const data = users;
  await sleep();
  return data;
};
export const getAllProducts = async () => {
  await sleep();
  return products;
};
export const getAllCustomers = async () => {
  await sleep();
  return customers;
};
export const getAllFolders = async () => {
  await sleep();
  return folders;
};
export const getCustomersById = async id => {
  const data = customers.find(customer => customer.id == id);
  await sleep();
  return data;
};
export const getOrderById = async id => {
  const data = products.find(product => product.id == id);
  await sleep();
  return data;
};
export const getAllPricingPlans = async () => {
  await sleep();
  return pricingPlans;
};
export const getAllTeams = async () => {
  const data = teams.map(team => {
    const user = users.find(user => user.id === team.userId);
    const members = team.membersId.map(member => {
      const teamMembers = users.find(user => user.id === member);
      if (teamMembers) {
        return teamMembers;
      }
    });
    return {
      ...team,
      user,
      members
    };
  });
  await sleep();
  return data;
};
export const getAllProjects = async () => {
  const allTeams = await getAllTeams();
  const data = projects.map(project => {
    const teams = allTeams.find(team => team.id === project.teamId);
    return {
      ...project,
      teams
    };
  });
  await sleep();
  return data;
};
export const getAllTasks = async () => {
  const allProjects = await getAllProjects();
  const data = tasks.map(task => {
    const projects = allProjects.find(project => project.id === task.projectId);
    const allUsers = users.find(user => user.id === task.userId);
    return {
      ...task,
      projects,
      allUsers
    };
  });
  await sleep();
  return data;
};