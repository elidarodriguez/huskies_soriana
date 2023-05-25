import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  VisuallyHidden,
  InputGroup,
  InputLeftElement,
  Avatar,
  Input,
  Link,
  Image,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiFillShop } from "react-icons/ai";

import {
  FaBaby,
  FaIceCream,
  FaAppleAlt,
  FaWineGlassAlt,
  FaChair,
  FaEdit,
} from "react-icons/fa";

import {
  MdCleaningServices,
  MdOutlineSmartToy,
  MdElectricBolt,
} from "react-icons/md";

import { FiShoppingCart, FiGift, FiLogOut } from "react-icons/fi";

import { BsFillGridFill, BsBagCheckFill } from "react-icons/bs";

import { GiMedicines } from "react-icons/gi";

import { CgProfile } from "react-icons/cg";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useState } from "react";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const perfilNav = useDisclosure();
  const { user, logOut } = useAuth();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const historiaC = useDisclosure();


  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const [todos, setTodos] = useState(1);
  const [abarrotes, setAbarrotes] = useState(2);
  const [bebes, setBebes] = useState(3);
  

  return (
    <React.Fragment>
      <chakra.header
        zIndex={"999"}
        borderBottomRadius={"2rem"}
        bg={"#208220"}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        position={"fixed"}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Link href={"/main"}>
              {/* Soriana Logo */}
              <Avatar
                size="md"
                name="Soriana Logo"
                src="/assets/sorianaLogo2.png"
                backgroundColor={"white"}
                padding={1}
              />
            </Link>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Categorias</DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <Link onClick={todos} href={"/categTodos"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<BsFillGridFill />}
                        />{" "}
                        Todos
                      </Link>
                    </Box>
                    <Box>
                      <Link onClick={abarrotes} href={""}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<AiFillShop />}
                        />{" "}
                        Abarrotes
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/categTodos"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaBaby />}
                        />{" "}
                        Bebés
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaIceCream />}
                        />{" "}
                        Congelados
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<GiMedicines />}
                        />{" "}
                        Farmacia
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaAppleAlt />}
                        />{" "}
                        Frutas y verduras
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<MdCleaningServices />}
                        />{" "}
                        Limpieza
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<MdOutlineSmartToy />}
                        />{" "}
                        Juguetería
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaWineGlassAlt />}
                        />{" "}
                        VinosLicores
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<MdElectricBolt />}
                        />{" "}
                        Electrodomésticos
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaChair />}
                        />{" "}
                        Muebles
                      </Link>
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter>
                  <Footer />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer
              isOpen={perfilNav.isOpen}
              placement="right"
              onClose={perfilNav.onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Perfil</DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <Link href={"/editarPerfil"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<FaEdit />}
                        />{" "}
                        Editar Perfil
                      </Link>
                    </Box>
                    <Box>
                      <Link href={"/historiaCompra"}>
                        <IconButton
                          aria-label="Go to cart"
                          fontSize="25px"
                          color="#208220 "
                          _dark={{
                            color: "inherit",
                          }}
                          variant="ghost"
                          icon={<BsBagCheckFill />}
                          onClick={historiaC.onOpen}
                        />{" "}
                        Historia de compra
                      </Link>
                    </Box>
                    <Box onClick={handleLogout}>
                      {/* Link to logout */}
                      <IconButton
                        aria-label="Log out"
                        fontSize="25px"
                        color="#208220"
                        _dark={{
                          color: "inherit",
                        }}
                        variant="ghost"
                        icon={<FiLogOut />}
                      />{" "}
                      Cerrar sesión
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter>
                  <Footer />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </HStack>
          <HStack spacing={1} alignItems="center">
            {/* Link to perfil */}

            <IconButton
              aria-label="Go to Perfil"
              fontSize="25px"
              color="#F2EFE1"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              onClick={perfilNav.onOpen}
              icon={<CgProfile />}
            />

            {/* Link to promociones */}
            <Link href={"/promociones"}>
              <IconButton
                aria-label="Go to promociones"
                fontSize="25px"
                color="#F2EFE1"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FiGift />}
              />
            </Link>
            {/* Link to Cart */}
            <Link href={"/carrito"}>
              <IconButton
                aria-label="Go to cart"
                fontSize="25px"
                color="#F2EFE1"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<FiShoppingCart />}
              />
            </Link>
            {/* open menu when you click */}

            <IconButton
              aria-label="Open menu"
              fontSize="20px"
              color="#F2EFE1"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={onOpen}
              // onClick={mobileNav.onOpen}
            />
          </HStack>
        </Flex>

        <HStack justifyContent={"center"} margin={"20px"} alignItems="center">
          {/* Searching Bar */}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch color="#208220" />
            </InputLeftElement>
            <Input
              borderColor={"#F2EFE1"}
              backgroundColor={"white"}
              type="tel"
              placeholder="Buscar..."
            />
          </InputGroup>
        </HStack>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
