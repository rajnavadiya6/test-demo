import React from "react";

import { Column, Row, Image, Stack, Line, Text, Button } from "components";

const HomepagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-livvic items-start justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-end lg:pb-[31px] xl:pb-[36px] pb-[41px] 3xl:pb-[49px] 3xl:pr-[111px] lg:pr-[72px] xl:pr-[82px] pr-[93px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] w-[100%]">
          <Image
            src={"images/img_group2.png"}
            className="lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[16%]"
            alt="Group2"
          />
          <Image
            src={"images/img_group5.png"}
            className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] object-contain w-[37%]"
            alt="Group5"
          />
          <Stack className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[213px] xl:ml-[244px] ml-[275px] 3xl:ml-[330px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[7%]">
            <Image
              src={"images/img_group3.png"}
              className="absolute lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] object-cover w-[100%]"
              alt="Group3"
            />
            <Line className="absolute bg-teal_900 h-[1px] left-[29%] w-[1%]" />
            <Line className="absolute bg-teal_900 h-[1px] right-[26%] w-[1%]" />
          </Stack>
        </Row>
        <Stack className="lg:h-[1184px] xl:h-[1354px] h-[1522px] 2xl:h-[1524px] 3xl:h-[1828px] w-[100%]">
          <Stack className="absolute lg:h-[1184px] xl:h-[1354px] h-[1522px] 2xl:h-[1524px] 3xl:h-[1828px] w-[100%]">
            <Stack className="absolute lg:h-[1184px] xl:h-[1354px] h-[1522px] 2xl:h-[1524px] 3xl:h-[1828px] w-[100%]">
              <Column className="absolute items-start justify-start w-[100%]">
                <Line className="bg-bluegray_900 h-[5px] w-[100%]" />
                <Column
                  className="bg-cover bg-repeat items-center justify-end ml-[1px] mt-[1018px] 3xl:mt-[1222px] lg:mt-[791px] xl:mt-[905px] lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] lg:pt-[219px] xl:pt-[250px] pt-[282px] 3xl:pt-[338px] lg:px-[10px] w-[33%]"
                  style={{ backgroundImage: "url('images/img_group6.png')" }}
                >
                  <Column className="items-start justify-start lg:ml-[143px] xl:ml-[163px] ml-[184px] 3xl:ml-[220px] lg:mr-[142px] xl:mr-[162px] mr-[183px] 3xl:mr-[219px] w-[18%]">
                    <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-teal_900 w-[auto]">
                      Hilton
                    </Text>
                    <Column className="items-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:px-[3px] xl:px-[4px] px-[5px] 3xl:px-[6px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-teal_900 w-[auto]">
                        6 colors
                      </Text>
                    </Column>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
                    <Button className="bg-teal_900 flex items-center justify-center lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius18 w-[8%]">
                      <Image
                        src={"images/img_group68.png"}
                        className="w-[14%] flex items-center justify-center"
                        alt="Group68"
                      />
                    </Button>
                    <Image
                      src={"images/img_rectangle29.png"}
                      className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] object-contain rounded-radius15 w-[16%]"
                      alt="Rectangle29"
                    />
                    <Image
                      src={"images/img_rectangle30.png"}
                      className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] object-contain rounded-radius15 w-[16%]"
                      alt="Rectangle30"
                    />
                    <Image
                      src={"images/img_rectangle31.png"}
                      className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] object-contain rounded-radius15 w-[16%]"
                      alt="Rectangle31"
                    />
                    <Image
                      src={"images/img_rectangle32.png"}
                      className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] object-contain rounded-radius15 w-[16%]"
                      alt="Rectangle32"
                    />
                    <Button className="bg-teal_900 flex items-center justify-center lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rotate-[-180deg] rounded-radius18 w-[8%]">
                      <Image
                        src={"images/img_group69.png"}
                        className="w-[14%] flex items-center justify-center"
                        alt="Group69"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="absolute bg-cover bg-repeat inset-x-[0] items-center justify-end mx-[auto] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pl-[49px] xl:pl-[56px] pl-[64px] 3xl:pl-[76px] lg:pr-[50px] xl:pr-[57px] pr-[65px] 3xl:pr-[78px] lg:pt-[222px] xl:pt-[254px] pt-[286px] 3xl:pt-[343px] w-[34%]"
                style={{ backgroundImage: "url('images/img_group71.png')" }}
              >
                <Text className="font-normal lg:ml-[102px] xl:ml-[117px] ml-[132px] 3xl:ml-[158px] xl:mr-[106px] mr-[120px] 3xl:mr-[144px] lg:mr-[93px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-teal_900 w-[auto]">
                  Formby
                </Text>
                <Text className="font-normal lg:ml-[114px] xl:ml-[130px] ml-[147px] 3xl:ml-[176px] lg:mr-[107px] xl:mr-[122px] mr-[138px] 3xl:mr-[165px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-teal_900 w-[auto]">
                  4 colors
                </Text>
                <Row className="items-center justify-center lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[100%]">
                  <Image
                    src={"images/img_rectangle29_1.png"}
                    className="lg:h-[59px] xl:h-[67px] h-[75px] 2xl:h-[76px] 3xl:h-[91px] object-contain rounded-radius15 w-[20%]"
                    alt="Rectangle29"
                  />
                  <Image
                    src={"images/img_rectangle30_1.png"}
                    className="lg:h-[59px] xl:h-[67px] h-[75px] 2xl:h-[76px] 3xl:h-[91px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] object-contain rounded-radius15 w-[20%]"
                    alt="Rectangle30"
                  />
                  <Image
                    src={"images/img_rectangle31_1.png"}
                    className="lg:h-[59px] xl:h-[67px] h-[75px] 2xl:h-[76px] 3xl:h-[91px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] object-contain rounded-radius15 w-[20%]"
                    alt="Rectangle31"
                  />
                  <Image
                    src={"images/img_rectangle32_1.png"}
                    className="lg:h-[59px] xl:h-[67px] h-[75px] 2xl:h-[76px] 3xl:h-[91px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] object-contain rounded-radius15 w-[20%]"
                    alt="Rectangle32"
                  />
                </Row>
              </Column>
            </Stack>
            <Column
              className="absolute bg-cover bg-repeat items-center justify-end lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] pl-[111px] 3xl:pl-[133px] lg:pl-[86px] xl:pl-[98px] pr-[109px] 3xl:pr-[130px] lg:pr-[84px] xl:pr-[96px] lg:pt-[227px] xl:pt-[259px] pt-[292px] 3xl:pt-[350px] w-[33%]"
              style={{ backgroundImage: "url('images/img_group7.png')" }}
            >
              <Text className="font-normal lg:ml-[64px] xl:ml-[73px] ml-[83px] 3xl:ml-[99px] 3xl:mr-[100px] lg:mr-[65px] xl:mr-[74px] mr-[84px] not-italic lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-teal_900 w-[auto]">
                Nelson
              </Text>
              <Text className="font-normal mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] not-italic lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-teal_900 w-[auto]">
                3 colors
              </Text>
              <Row className="items-center justify-center lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Image
                  src={"images/img_rectangle29_2.png"}
                  className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] object-contain rounded-radius15 w-[28%]"
                  alt="Rectangle29"
                />
                <Image
                  src={"images/img_rectangle30_2.png"}
                  className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] object-contain rounded-radius15 w-[28%]"
                  alt="Rectangle30"
                />
                <Image
                  src={"images/img_rectangle31_2.png"}
                  className="lg:h-[60px] xl:h-[68px] h-[76px] 2xl:h-[77px] 3xl:h-[92px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] object-contain rounded-radius15 w-[28%]"
                  alt="Rectangle31"
                />
              </Row>
            </Column>
          </Stack>
          <Column
            className="absolute bg-cover bg-repeat items-start justify-center lg:pb-[316px] xl:pb-[362px] pb-[407px] 3xl:pb-[488px] lg:pl-[115px] xl:pl-[131px] pl-[148px] 3xl:pl-[177px] lg:pt-[315px] xl:pt-[360px] pt-[405px] 3xl:pt-[486px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_group4.png')" }}
          >
            <Text className="font-bold leading-[normal] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-left text-teal_900 w-[44%]">
              <span className="text-teal_900 font-livvic font-normal">
                Glasses From{" "}
              </span>
              <span className="text-teal_900 font-livvic">$99 </span>
              <span className="text-teal_900 font-livvic font-normal">
                Including prescription <br />
                lenses, coatings and thin lenses
              </span>
            </Text>
            <Row className="items-center justify-start ml-[0] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] mt-[84px] w-[24%]">
              <Button className="bg-white_A700 font-semibold lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius15 lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-center text-teal_900 w-[47%]">
                Shop Men
              </Button>
              <Button className="bg-white_A700 font-semibold lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius15 lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-center text-teal_900 w-[47%]">
                Shop Women
              </Button>
            </Row>
          </Column>
        </Stack>
        <Column className="items-center pl-[1px] w-[100%]">
          <Row className="bg-gray_50 items-center justify-end overflow-auto lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] xl:pt-[1px] lg:pt-[1px] pt-[2px] w-[100%]">
            <Column
              className="bg-cover bg-repeat items-center lg:pb-[48px] xl:pb-[55px] pb-[62px] 3xl:pb-[74px] xl:pl-[140px] pl-[158px] 3xl:pl-[189px] xl:pr-[139px] pr-[157px] 3xl:pr-[188px] lg:pt-[353px] xl:pt-[404px] pt-[455px] 3xl:pt-[546px] lg:px-[122px] w-[50%]"
              style={{ backgroundImage: "url('images/img_group8.png')" }}
            >
              <Button className="bg-cyan_300 font-semibold lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius20 lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-center text-teal_900 w-[100%]">
                Sunglasses Collection
              </Button>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center lg:pb-[48px] xl:pb-[55px] pb-[62px] 3xl:pb-[74px] lg:pr-[101px] xl:pr-[116px] pr-[131px] 3xl:pr-[157px] lg:pt-[353px] xl:pt-[404px] pt-[455px] 3xl:pt-[546px] w-[50%]"
              style={{ backgroundImage: "url('images/img_group9.png')" }}
            >
              <Button className="bg-cyan_300 font-semibold lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius20 lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-center text-teal_900 w-[70%]">
                Glasses Collection
              </Button>
            </Column>
          </Row>
          <Stack className="lg:h-[1284px] xl:h-[1468px] h-[1650px] 2xl:h-[1652px] 3xl:h-[1982px] lg:mt-[59px] xl:mt-[68px] mt-[77px] 3xl:mt-[92px] w-[100%]">
            <Stack className="absolute lg:h-[1284px] xl:h-[1468px] h-[1650px] 2xl:h-[1652px] 3xl:h-[1982px] w-[100%]">
              <Column className="absolute inset-x-[0] items-start justify-start w-[100%]">
                <Row className="items-center justify-between lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:mr-[45px] xl:mr-[51px] mr-[58px] 3xl:mr-[69px] w-[92%]">
                  <Image
                    src={"images/img_rectangle26.png"}
                    className="lg:h-[251px] xl:h-[287px] h-[322px] 2xl:h-[323px] 3xl:h-[387px] object-contain w-[30%]"
                    alt="Rectangle26"
                  />
                  <Image
                    src={"images/img_rectangle27.png"}
                    className="lg:h-[251px] xl:h-[287px] h-[322px] 2xl:h-[323px] 3xl:h-[387px] object-contain w-[27%]"
                    alt="Rectangle27"
                  />
                  <Image
                    src={"images/img_rectangle28.png"}
                    className="lg:h-[251px] xl:h-[287px] h-[322px] 2xl:h-[323px] 3xl:h-[387px] object-contain w-[27%]"
                    alt="Rectangle28"
                  />
                </Row>
                <Column className="items-start justify-start 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] 3xl:mr-[114px] lg:mr-[73px] xl:mr-[84px] mr-[95px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[88%]">
                  <Row className="items-center justify-start w-[82%]">
                    <Text className="font-bold lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-teal_900 w-[auto]">
                      Eye Health
                    </Text>
                    <Text className="font-bold lg:ml-[315px] xl:ml-[360px] ml-[405px] 3xl:ml-[486px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-teal_900 w-[auto]">
                      Finest Material
                    </Text>
                    <Text className="font-bold lg:ml-[273px] xl:ml-[313px] ml-[352px] 3xl:ml-[422px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-teal_900 w-[auto]">
                      Direct To You
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Text className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-teal_900 w-[auto]">
                      Comprehensive eye examination, keeping your eyes healthy
                    </Text>
                    <Text className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-teal_900 w-[auto]">
                      We source the finest material to produce our frames.
                    </Text>
                    <Text className="font-normal not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-teal_900 w-[auto]">
                      No middleman or markups prescription glasses from £100
                    </Text>
                  </Row>
                </Column>
                <Column className="items-start lg:mt-[161px] xl:mt-[184px] mt-[207px] 3xl:mt-[248px] w-[100%]">
                  <Column
                    className="bg-cover bg-repeat justify-center lg:pb-[224px] xl:pb-[257px] pb-[289px] 3xl:pb-[347px] xl:pl-[108px] pl-[122px] 3xl:pl-[146px] lg:pl-[94px] xl:pt-[112px] pt-[126px] 3xl:pt-[151px] lg:pt-[98px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group5_1.png')",
                    }}
                  >
                    <Row className="items-center justify-start w-[45%]">
                      <Text className="bg-white_A700 border border-solid border-teal_900 font-semibold lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-bl-[30px] rounded-br-[0] rounded-tl-[30px] rounded-tr-[0] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-black_900_6c w-[auto]">
                        Email
                      </Text>
                      <Text className="bg-cyan_300 border border-solid border-teal_900 font-semibold lg:pl-[16px] xl:pl-[18px] pl-[21px] 3xl:pl-[25px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-bl-[0] rounded-br-[30px] rounded-tl-[0] rounded-tr-[30px] lg:text-[23px] xl:text-[26px] text-[30px] 3xl:text-[36px] text-teal_900 w-[auto]">
                        Send
                      </Text>
                    </Row>
                    <Text className="font-semibold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-teal_900 w-[auto]">
                      We also send amazing emails about the latest fashion and
                      eyewear trends, stay connected.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Row className="absolute items-center justify-start right-[7%] top-[28%] w-[69%]">
                <Text className="font-normal not-italic text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-teal_900 underline w-[auto]">
                  Learn more
                </Text>
                <Text className="font-normal lg:ml-[314px] xl:ml-[359px] ml-[404px] 3xl:ml-[485px] not-italic text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-teal_900 underline w-[auto]">
                  Learn more
                </Text>
                <Text className="font-normal lg:ml-[331px] xl:ml-[378px] ml-[426px] 3xl:ml-[511px] not-italic text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-teal_900 underline w-[auto]">
                  Learn more
                </Text>
              </Row>
              <Row className="absolute bottom-[25%] items-start justify-start right-[13%] w-[44%]">
                <Text className="font-bold xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-white_A700 underline uppercase w-[auto]">
                  Products
                </Text>
                <Text className="font-bold xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] xl:ml-[107px] ml-[121px] 3xl:ml-[145px] lg:ml-[94px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-white_A700 underline uppercase w-[auto]">
                  Education
                </Text>
                <Text className="font-bold lg:ml-[157px] xl:ml-[180px] ml-[203px] 3xl:ml-[243px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-white_A700 underline uppercase w-[auto]">
                  About us
                </Text>
              </Row>
              <footer className="absolute bg-teal_900 inset-x-[0] w-[100%]">
                <Column className="items-start justify-start w-[86%]">
                  <Row className="items-center justify-start w-[93%]">
                    <Image
                      src={"images/img_group73.png"}
                      className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] object-contain w-[11%]"
                      alt="Group73"
                    />
                    <Text className="font-bold xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[301px] xl:ml-[345px] ml-[388px] 3xl:ml-[465px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-white_A700 underline uppercase w-[auto]">
                      Products
                    </Text>
                    <Text className="font-bold xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] xl:ml-[107px] ml-[121px] 3xl:ml-[145px] lg:ml-[94px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-white_A700 underline uppercase w-[auto]">
                      Education
                    </Text>
                    <Text className="font-bold lg:ml-[157px] xl:ml-[180px] ml-[203px] 3xl:ml-[243px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-white_A700 underline uppercase w-[auto]">
                      About us
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] w-[100%]">
                    <Row className="items-start justify-between lg:mr-[17px] xl:mr-[20px] mr-[23px] 3xl:mr-[27px] w-[98%]">
                      <Text className="font-bold leading-[normal] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-left text-white_A700 tracking-ls1 w-[37%]">
                        We started EyeLux because we want to make sure buying
                        modern and iconic eyewear is accessible and leaves you
                        happy with plenty of money in your pocket.
                      </Text>
                      <Column className="items-start justify-start mt-[1px] w-[58%]">
                        <Row className="items-start justify-start w-[90%]">
                          <Image
                            src={"images/img_image16.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[2%]"
                            alt="image16"
                          />
                          <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                            Glasses
                          </Text>
                          <Image
                            src={"images/img_image20.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[111px] xl:ml-[127px] ml-[143px] 3xl:ml-[171px] object-contain w-[2%]"
                            alt="image20"
                          />
                          <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                            How we make our frames
                          </Text>
                          <Image
                            src={"images/img_image24.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] ml-[98px] object-contain w-[2%]"
                            alt="image24"
                          />
                          <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                            Our story
                          </Text>
                        </Row>
                        <Row className="items-start justify-start lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[100%]">
                          <Image
                            src={"images/img_image17.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[2%]"
                            alt="image17"
                          />
                          <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                            Sunglasses
                          </Text>
                          <Image
                            src={"images/img_image21.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:ml-[105px] ml-[119px] 3xl:ml-[142px] lg:ml-[92px] object-contain w-[2%]"
                            alt="image21"
                          />
                          <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                            Our lenses and coatings
                          </Text>
                          <Image
                            src={"images/img_image25.png"}
                            className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:ml-[101px] ml-[114px] 3xl:ml-[136px] lg:ml-[88px] object-contain w-[2%]"
                            alt="image25"
                          />
                          <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                            Buy One Plant One
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-start justify-start lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[100%]">
                      <Image
                        src={"images/img_rectangle43.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain rounded-radius6 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Rectangle43"
                      />
                      <Image
                        src={"images/img_rectangle44.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain rounded-radius6 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Rectangle44"
                      />
                      <Image
                        src={"images/img_rectangle45.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain rounded-radius6 w-[2%]"
                        alt="Rectangle45"
                      />
                      <Image
                        src={"images/img_rectangle46.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] object-contain rounded-radius6 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Rectangle46"
                      />
                      <Image
                        src={"images/img_image18.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[280px] xl:ml-[320px] ml-[360px] 3xl:ml-[432px] object-contain w-[1%]"
                        alt="image18"
                      />
                      <Text className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Blue light filter
                      </Text>
                      <Image
                        src={"images/img_image22.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] object-contain w-[1%]"
                        alt="image22"
                      />
                      <Text className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Light responsive lenses
                      </Text>
                      <Image
                        src={"images/img_image26.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] xl:ml-[107px] ml-[121px] 3xl:ml-[145px] lg:ml-[94px] object-contain w-[1%]"
                        alt="image26"
                      />
                      <Text className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Shipment And Returns
                      </Text>
                    </Row>
                  </Column>
                  <Column className="items-end lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] 3xl:pr-[102px] lg:pr-[66px] xl:pr-[75px] pr-[85px] w-[100%]">
                    <Row className="items-start justify-end w-[36%]">
                      <Image
                        src={"images/img_image23.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[4%]"
                        alt="image23"
                      />
                      <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Measure Your PD
                      </Text>
                      <Image
                        src={"images/img_image27.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[127px] xl:ml-[145px] ml-[164px] 3xl:ml-[196px] object-contain w-[4%]"
                        alt="image27"
                      />
                      <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Contact Us
                      </Text>
                    </Row>
                    <Row className="items-start justify-end lg:mr-[39px] xl:mr-[45px] mr-[51px] 3xl:mr-[61px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[31%]">
                      <Image
                        src={"images/img_image29.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[4%]"
                        alt="image29"
                      />
                      <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Polarised lenses
                      </Text>
                      <Image
                        src={"images/img_image27_1.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[133px] xl:ml-[152px] ml-[171px] 3xl:ml-[205px] object-contain w-[4%]"
                        alt="image27"
                      />
                      <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        FAQ
                      </Text>
                    </Row>
                    <Row className="items-start justify-end lg:mr-[220px] xl:mr-[252px] mr-[284px] 3xl:mr-[340px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[11%]">
                      <Image
                        src={"images/img_image30.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[11%]"
                        alt="image30"
                      />
                      <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Thinner Lenses
                      </Text>
                    </Row>
                    <Row className="items-start justify-end lg:mr-[254px] xl:mr-[290px] mr-[327px] 3xl:mr-[392px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[8%]">
                      <Image
                        src={"images/img_image31.png"}
                        className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain w-[17%]"
                        alt="image31"
                      />
                      <Text className="font-bold lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700 tracking-ls1 w-[auto]">
                        Varifocal
                      </Text>
                    </Row>
                    <Image
                      src={"images/img_image28.png"}
                      className="lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] lg:mr-[27px] xl:mr-[31px] mr-[35px] 3xl:mr-[42px] lg:mt-[55px] xl:mt-[63px] mt-[71px] 3xl:mt-[85px] object-contain w-[21%]"
                      alt="image28"
                    />
                  </Column>
                </Column>
              </footer>
            </Stack>
            <Image
              src={"images/img_group133.png"}
              className="absolute lg:h-[614px] xl:h-[702px] h-[789px] 2xl:h-[790px] 3xl:h-[948px] object-contain top-[24%] w-[39%]"
              alt="Group133"
            />
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default HomepagePage;
