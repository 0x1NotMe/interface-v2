import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  withStyles,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Switch,
} from '@material-ui/core';

import styled from 'styled-components';
import { CustomSelect, SmOption } from 'components/CustomSelect';
import ReactApexChart from 'react-apexcharts';
import { _100 } from '@uniswap/sdk/dist/constants';
import { useHistory } from 'react-router-dom';
import AntSwitch from 'components/AntSwitch';

import ModalParent, {
  QuickModalContent,
  StateModalContent,
} from 'components/Modals';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  hideCell: {
    display: 'reverse',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const LendDetailPage: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [modalNotoolbar, setModalNotoolbar] = useState<boolean>(false);
  const [modalNotitle, setModalNotitle] = useState<boolean>(false);
  const [modalType, setModalType] = useState<'state' | 'quick' | null>(null);
  const [modalIsBorrow, setModalIsBorrow] = useState<boolean>(false);
  const [modalIsConfirm, setModalIsConfirm] = useState<boolean>(false);

  const [openModalType, setOpenModalType] = useState<{
    back: {
      notoolbar: boolean;
      notitle: boolean;
    };
    content: {
      type: 'state' | 'quick';
      borrow: boolean;
      confirm: boolean;
    };
  } | null>(null);
  return (
    <>
      <Box width={'100%'}>
        <Box
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          gridGap={'20px'}
          flexWrap={'wrap'}
        >
          <Box
            onClick={() => {
              history.push('../lend');
            }}
            display={'flex'}
            alignItems={'center'}
            style={{ cursor: 'pointer' }}
          >
            <svg
              data-name='Layer 2'
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 28 28'
            >
              <g data-name='invisible box'>
                <path
                  data-name='Rectangle 20001'
                  fill='none'
                  d='M0 0h28v28H0z'
                />
              </g>
              <g data-name='Q3 icons'>
                <path
                  data-name='Path 11780'
                  d='m16.285 10.35-6.942 7a1.108 1.108 0 0 0 0 1.633l6.942 7a1.225 1.225 0 0 0 1.575.117 1.108 1.108 0 0 0 .117-1.75l-5.017-5.016h12.367a1.167 1.167 0 1 0 0-2.333H12.96l5.017-5.017a1.108 1.108 0 0 0-.117-1.75 1.225 1.225 0 0 0-1.575.117z'
                  transform='translate(-3.744 -4.167)'
                  fill='#448aff'
                />
              </g>
            </svg>
          </Box>
          <Box fontSize={'24px'} fontWeight={'bold'} color={'white'}>
            Quickswap Pool
          </Box>
          <Box display={'flex'} gridGap={'2px'}>
            <USDTIcon size={'24px'} />
            <USDTIcon size={'24px'} />
            <USDTIcon size={'24px'} />
            <USDTIcon size={'24px'} />
            <USDTIcon size={'24px'} />
            <Box
              bgcolor={'#32394c'}
              width={'24px'}
              height={'24px'}
              borderRadius={'100%'}
              display={'flex'}
              alignItems={'center'}
            >
              <Box ml={'1px'} mt={'-5px'} display={'flex'}>
                <USDTIcon size={'13px'} />
              </Box>
              <Box ml={'-4px'} mt={'5px'} display={'flex'}>
                <USDTIcon size={'13px'} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          mt={'40px'}
          fontSize={'20px'}
          fontWeight={'700'}
          textAlign={'left'}
          color={'#ebecf2'}
        >
          Leverage assets you believe in
        </Box>
        <Box mt={'23px'} display={'flex'} gridGap={'24px'} flexWrap={'wrap'}>
          <Box
            flex={'1'}
            sx={{ minWidth: { xs: '55%', sm: '35%', md: '20%' } }}
            bgcolor={'#232734'}
            p={'24px'}
            borderRadius={'12px'}
          >
            <Box color={'#696c80'} fontSize={'14px'}>
              Total Supply
            </Box>
            <Box fontSize={'24px'} color={'white'}>
              $19.2M
            </Box>
          </Box>
          <Box
            flex={'1'}
            sx={{ minWidth: { xs: '55%', sm: '35%', md: '20%' } }}
            bgcolor={'#232734'}
            p={'24px'}
            borderRadius={'12px'}
          >
            <Box color={'#696c80'} fontSize={'14px'}>
              Total Borrowed
            </Box>
            <Box fontSize={'24px'} color={'white'}>
              $19.2M
            </Box>
          </Box>
          <Box
            flex={'1'}
            sx={{ minWidth: { xs: '55%', sm: '35%', md: '20%' } }}
            bgcolor={'#232734'}
            p={'24px'}
            borderRadius={'12px'}
          >
            <Box color={'#696c80'} fontSize={'14px'}>
              Liquidity
            </Box>
            <Box fontSize={'24px'} color={'white'}>
              $19.2M
            </Box>
          </Box>
          <Box
            flex={'1'}
            sx={{ minWidth: { xs: '55%', sm: '35%', md: '20%' } }}
            bgcolor={'#232734'}
            p={'24px'}
            borderRadius={'12px'}
          >
            <Box color={'#696c80'} fontSize={'14px'}>
              Pool Utilization
            </Box>
            <Box fontSize={'24px'} color={'white'}>
              $19.2M
            </Box>
          </Box>
        </Box>
        <Box
          mt={'24px'}
          flex={'1'}
          bgcolor={'#232734'}
          borderRadius={'8px'}
          display={'flex'}
          sx={{
            height: { xs: 'auto', sm: 'auto', md: '40px' },
            paddingY: { xs: '10px', sm: '10px', md: '0px' },
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            alignItems: { xs: 'unset', sm: 'unset', md: 'center' },
          }}
          flexWrap={'wrap'}
          gridRowGap={'4px'}
        >
          <Box
            height={'100%'}
            paddingX={'25px'}
            display={'flex'}
            alignItems={'center'}
            sx={{
              borderRight: { xs: 'none', sm: 'none', md: '1px solid #323548' },
            }}
          >
            <Box>Borrow limit</Box>
            <Box ml={'8px'}>
              <Box
                width={'16px'}
                height={'16px'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                fontSize={'12px'}
                color={'#63687e'}
                border={'1px solid #63687e'}
                borderRadius={'100%'}
              >
                ?
              </Box>
            </Box>
          </Box>
          <Box
            flexGrow={'1'}
            paddingX={'30px'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gridGap={'4px 24px'}
            flexWrap={'wrap'}
          >
            <Box sx={{ order: { xs: 2, sm: 2, md: 1 } }}>$0</Box>
            <Box
              sx={{
                order: { xs: 1, sm: 1, md: 2 },
                minWidth: { xs: '100%', sm: '100%', md: 'unset' },
              }}
              flexGrow={'1'}
              position={'relative'}
              bgcolor={'#323548'}
              height={'5px'}
              borderRadius={'100px'}
              overflow={'hidden'}
            >
              <Box
                position={'absolute'}
                top={'0px'}
                left={'0px'}
                bgcolor={'#0fc679'}
                width={'35%'}
                height={'100%'}
              />
              <Box
                position={'absolute'}
                top={'0px'}
                left={'50%'}
                bgcolor={'#ebecf2'}
                width={'8px'}
                height={'100%'}
              />
              <Box
                position={'absolute'}
                top={'0px'}
                left={'60%'}
                bgcolor={'#fc615a'}
                width={'8px'}
                height={'100%'}
              />
            </Box>
            <Box sx={{ order: { xs: 3, sm: 3, md: 3 } }}>$0</Box>
          </Box>
        </Box>
        <Box
          mt={'24px'}
          display={'flex'}
          gridGap={'32px'}
          flexWrap={'wrap'}
          sx={{ flexDirection: { sm: 'column', md: 'row' } }}
        >
          <Box
            flex={'1'}
            borderRadius={'20px'}
            bgcolor={'#232734'}
            display={'flex'}
            flexDirection={'column'}
            sx={{ minWidth: { xs: '55%', sm: '35%' } }}
          >
            <Box
              height={'70px'}
              borderBottom={'solid 1px #32394d'}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box
                px={'30px'}
                fontSize={'18px'}
                fontWeight={'500'}
                borderLeft={'4px solid #448aff'}
                lineHeight={'1'}
              >
                Supply
              </Box>
              <Box mr={'30px'} display={'flex'} fontSize={'14px'}>
                <Box color={'#c7cad9'}>Your Supply Balance:&nbsp;</Box>
                <Box color={'white'}>$0.00</Box>
              </Box>
            </Box>
            <Box display={'flex'} paddingX={'24px'}>
              <Table>
                <TableHead>
                  <TableRow>
                    <MuiTableCell>
                      <Box paddingY={'20px'}>Asset / LTV</Box>
                    </MuiTableCell>
                    <MuiTableCell className={classes.hideCell}>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        Supply APY
                      </Box>
                    </MuiTableCell>
                    <MuiTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        Depositd
                      </Box>
                    </MuiTableCell>
                    <MuiTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        Collateral
                      </Box>
                    </MuiTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <ItemTableCell
                      onClick={() => {
                        setModalType('quick');
                        setModalIsBorrow(false);
                      }}
                    >
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        alignItems={'center'}
                        gridGap={'16px'}
                      >
                        <Box display={'flex'} alignItems={'center'}>
                          <USDTIcon size={'36px'} />
                        </Box>
                        <Box
                          display={'flex'}
                          flexDirection={'column'}
                          gridGap={'4px'}
                        >
                          <Box
                            fontSize={'14px'}
                            color={'#ebecf2'}
                            textAlign={'right'}
                          >
                            QUICK
                          </Box>
                          <Box
                            fontSize={'13px'}
                            color={'#696c80'}
                            textAlign={'right'}
                          >
                            LTV: 65%
                          </Box>
                        </Box>
                      </Box>
                    </ItemTableCell>
                    <ItemTableCell
                      onClick={() => {
                        setModalType('quick');
                        setModalIsBorrow(false);
                      }}
                    >
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <Box
                          ml={'auto'}
                          display={'inline-flex'}
                          flexDirection={'column'}
                          gridGap={'4px'}
                          color={'#ebecf2'}
                        >
                          <Box fontSize={'14px'} textAlign={'right'}>
                            10.24%
                          </Box>
                          <Box fontSize={'13px'} textAlign={'right'}>
                            (12.3%
                            <USDTIcon size={'12px'} />)
                          </Box>
                        </Box>
                      </Box>
                    </ItemTableCell>
                    <ItemTableCell
                      onClick={() => {
                        setModalType('quick');
                        setModalIsBorrow(false);
                      }}
                    >
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <Box
                          display={'inline-flex'}
                          flexDirection={'column'}
                          gridGap={'4px'}
                        >
                          <Box
                            fontSize={'14px'}
                            color={'#ebecf2'}
                            textAlign={'right'}
                          >
                            $0.00
                          </Box>
                          <Box
                            fontSize={'13px'}
                            color={'#696c80'}
                            textAlign={'right'}
                          >
                            QUICK
                          </Box>
                        </Box>
                      </Box>
                    </ItemTableCell>
                    <MuiTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <AntSwitch
                          inputProps={{ 'aria-label': 'ant design' }}
                        />
                      </Box>
                    </MuiTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
          <Box
            flex={'1'}
            borderRadius={'20px'}
            bgcolor={'#232734'}
            display={'flex'}
            flexDirection={'column'}
            sx={{ minWidth: { xs: '55%', sm: '35%' } }}
          >
            <Box
              height={'70px'}
              borderBottom={'solid 1px #32394d'}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box
                px={'30px'}
                fontSize={'18px'}
                fontWeight={'500'}
                borderLeft={'4px solid #fc6259'}
                lineHeight={'1'}
              >
                Borrow
              </Box>
              <Box mr={'30px'} display={'flex'} fontSize={'14px'}>
                <Box color={'#c7cad9'}>Your Supply Balance:&nbsp;</Box>
                <Box color={'white'}>$0.00</Box>
              </Box>
            </Box>
            <Box display={'flex'} paddingX={'24px'}>
              <Table>
                <TableHead>
                  <TableRow>
                    <MuiTableCell>
                      <Box paddingY={'20px'}>Asset / LTV</Box>
                    </MuiTableCell>
                    <MuiTableCell className={classes.hideCell}>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        Supply APY
                      </Box>
                    </MuiTableCell>
                    <MuiTableCell className={classes.hideCell}>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        Depositd
                      </Box>
                    </MuiTableCell>
                    <MuiTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        Collateral
                      </Box>
                    </MuiTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <ItemTableRow
                    onClick={() => {
                      setModalType('quick');
                      setModalIsBorrow(true);
                    }}
                  >
                    <ItemTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        alignItems={'center'}
                        gridGap={'16px'}
                      >
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          gridGap={'16px'}
                        >
                          <USDTIcon size={'36px'} />
                          <Box
                            fontSize={'14px'}
                            color={'#ebecf2'}
                            textAlign={'right'}
                          >
                            USDT
                          </Box>
                        </Box>
                      </Box>
                    </ItemTableCell>
                    <ItemTableCell className={classes.hideCell}>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <Box fontSize={'13px'}>12.3%</Box>
                      </Box>
                    </ItemTableCell>
                    <ItemTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <Box
                          display={'inline-flex'}
                          flexDirection={'column'}
                          gridGap={'4px'}
                        >
                          <Box
                            fontSize={'14px'}
                            color={'#ebecf2'}
                            textAlign={'right'}
                          >
                            $0.00
                          </Box>
                          <Box
                            fontSize={'13px'}
                            color={'#696c80'}
                            textAlign={'right'}
                          >
                            130.49 USDC
                          </Box>
                        </Box>
                      </Box>
                    </ItemTableCell>
                    <ItemTableCell>
                      <Box
                        paddingY={'20px'}
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        <Box
                          display={'inline-flex'}
                          flexDirection={'column'}
                          gridGap={'4px'}
                        >
                          <Box
                            fontSize={'14px'}
                            color={'#ebecf2'}
                            textAlign={'right'}
                          >
                            $0.00M
                          </Box>
                          <Box
                            fontSize={'13px'}
                            color={'#696c80'}
                            textAlign={'right'}
                          >
                            4.5M USDC
                          </Box>
                        </Box>
                      </Box>
                    </ItemTableCell>
                  </ItemTableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
          <Box
            flex={'1'}
            borderRadius={'20px'}
            bgcolor={'#232734'}
            display={'flex'}
            flexDirection={'column'}
            sx={{ minWidth: { xs: '55%', sm: '35%' } }}
          >
            <Box
              height={'70px'}
              borderBottom={'solid 1px #32394d'}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box
                px={'30px'}
                fontSize={'18px'}
                fontWeight={'500'}
                lineHeight={'1'}
              >
                Pool Info
              </Box>
            </Box>
            <Box display={'flex'} pb={'16px'} flexDirection={'column'}>
              <Box
                flex={1}
                display={'flex'}
                sx={{
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Total Supplied:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      $12.9M
                    </Box>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Total Borrowed:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      $12.9M
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                flex={1}
                display={'flex'}
                sx={{
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Available Liquidity:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      $12.9M
                    </Box>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Pool Utilization:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      23.22%
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                flex={1}
                display={'flex'}
                sx={{
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Upgradeable:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      Yes
                    </Box>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Admin (copy):
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      0x07…46
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                flex={1}
                display={'flex'}
                sx={{
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Platform Fee:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      5.0%
                    </Box>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Average Admin Fee:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      0.00%
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                flex={1}
                display={'flex'}
                sx={{
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Close Factor:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      50%
                    </Box>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Liquidation Incentive:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      8%
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                flex={1}
                display={'flex'}
                sx={{
                  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
              >
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Oracle:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      Chainlink
                    </Box>
                  </Box>
                </Box>
                <Box flex={1}>
                  <Box
                    padding={'20px'}
                    display={'flex'}
                    alignItems={'center'}
                    gridGap={'4px'}
                    borderBottom={'1px solid #32394d'}
                    sx={{
                      justifyContent: {
                        xs: 'space-between',
                        sm: 'space-between',
                        md: 'flex-start',
                      },
                    }}
                  >
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#c7cad9'}>
                      Whitelist:
                    </Box>
                    <Box fontSize={'14px'} fontWeight={'500'} color={'#ebecf2'}>
                      Yes
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            flex={'1'}
            borderRadius={'20px'}
            bgcolor={'#232734'}
            display={'flex'}
            flexDirection={'column'}
            sx={{ minWidth: { xs: '55%', sm: '35%' } }}
          >
            <Box
              height={'70px'}
              borderBottom={'solid 1px #32394d'}
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box
                px={'30px'}
                fontSize={'18px'}
                fontWeight={'500'}
                lineHeight={'1'}
              >
                QUICK Statistics
              </Box>
              <Box mr={'30px'} display={'flex'} fontSize={'14px'}>
                <CustomSelect arrowcolor={'#428afa'}>
                  <SmOption value={'QUICK'}>QUICK</SmOption>
                  <SmOption value={'123123'}>123123</SmOption>
                  <SmOption value={'12313212'}>12313212</SmOption>
                </CustomSelect>
              </Box>
            </Box>
            <Box flex={1} pb={'16px'} display={'flex'} flexDirection={'column'}>
              <Box flex={1} position={'relative'} pt={'10px'} paddingX={'30px'}>
                <Box
                  ml={'-5px'}
                  mr={'auto'}
                  padding={'6px 7px'}
                  fontSize={'10px'}
                  borderRadius={'4px'}
                  border={'solid 1px #3e4252'}
                  display={'inline-block'}
                >
                  Current Utilization
                </Box>
                <Box mb={'20px'} borderLeft={'1px dashed #484c58'}>
                  <ReactApexChart
                    options={{
                      chart: {
                        type: 'line',
                        zoom: {
                          enabled: false,
                        },
                        toolbar: {
                          show: false,
                        },
                      },
                      dataLabels: {
                        enabled: false,
                      },
                      colors: ['#4289ff', '#fa6358'],
                      markers: {
                        size: [1, 1],
                        colors: undefined,
                        strokeColors: ['#4289ff', '#fa6358'],
                        discrete: [
                          {
                            seriesIndex: 0,
                            dataPointIndex: 0,
                            fillColor: '#4289ff',
                            strokeColor: '#fff',
                            size: 5,
                            shape: 'circle',
                          },
                          {
                            seriesIndex: 1,
                            dataPointIndex: 0,
                            fillColor: '#fa6358',
                            strokeColor: '#eee',
                            size: 5,
                            shape: 'circle',
                          },
                        ],
                      },
                      stroke: {
                        curve: 'smooth',
                      },
                      title: {
                        text: '',
                        align: 'left',
                      },
                      grid: {
                        show: false,
                        padding: {
                          top: 0,
                          right: 0,
                          bottom: -10,
                          left: 5,
                        },
                      },
                      xaxis: {
                        position: 'top',
                        axisBorder: {
                          show: false,
                        },
                        labels: {
                          show: false,
                        },
                        axisTicks: {
                          show: false,
                        },
                      },
                      yaxis: {
                        show: false,
                      },
                      tooltip: {
                        enabled: false,
                      },
                      legend: {
                        show: false,
                      },
                    }}
                    series={[
                      {
                        name: 'first',
                        data: [0, 41, 35, 51, 49, 62, 69, 91, 148],
                      },
                      {
                        name: 'second',
                        data: [62, 69, 91, 0, 41, 35, 51, 49, 148],
                      },
                    ]}
                    type='line'
                    height={'100%'}
                  />
                </Box>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-around'}
                paddingY={'20px'}
                borderTop={'1px solid #32394d'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gridGap={'8px'}
                >
                  <Box textAlign={'center'} fontSize={'14px'} color={'#c7cad9'}>
                    Collateral Factor:
                  </Box>
                  <Box textAlign={'center'} fontSize={'14px'} color={'#ebecf2'}>
                    60%
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gridGap={'8px'}
                >
                  <Box textAlign={'center'} fontSize={'14px'} color={'#c7cad9'}>
                    Reserve Factor:
                  </Box>
                  <Box textAlign={'center'} fontSize={'14px'} color={'#ebecf2'}>
                    60%
                  </Box>
                </Box>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-around'}
                paddingY={'20px'}
                borderTop={'1px solid #32394d'}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gridGap={'8px'}
                >
                  <Box textAlign={'center'} fontSize={'14px'} color={'#c7cad9'}>
                    Total Supplied:
                  </Box>
                  <Box textAlign={'center'} fontSize={'14px'} color={'#ebecf2'}>
                    $2.3M
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gridGap={'8px'}
                >
                  <Box textAlign={'center'} fontSize={'14px'} color={'#c7cad9'}>
                    Total Borrowed:
                  </Box>
                  <Box textAlign={'center'} fontSize={'14px'} color={'#ebecf2'}>
                    $0
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  gridGap={'8px'}
                >
                  <Box textAlign={'center'} fontSize={'14px'} color={'#c7cad9'}>
                    Utilization:
                  </Box>
                  <Box textAlign={'center'} fontSize={'14px'} color={'#ebecf2'}>
                    0%
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {modalType && (
        <ModalParent
          notoolbar={modalNotoolbar}
          notitle={modalNotitle}
          setOpenModalType={setModalType}
        >
          {modalType === 'state' ? (
            <StateModalContent
              modalSetting={{
                setModalNotoolbar: {
                  value: modalNotoolbar,
                  set: setModalNotoolbar,
                },
                setModalNotitle: { value: modalNotitle, set: setModalNotitle },
                setModalType: { value: modalType, set: setModalType },
                setModalIsBorrow: {
                  value: modalIsBorrow,
                  set: setModalIsBorrow,
                },
                setModalIsConfirm: {
                  value: modalIsConfirm,
                  set: setModalIsConfirm,
                },
              }}
              loading
            />
          ) : (
            <QuickModalContent
              modalSetting={{
                setModalNotoolbar: {
                  value: modalNotoolbar,
                  set: setModalNotoolbar,
                },
                setModalNotitle: { value: modalNotitle, set: setModalNotitle },
                setModalType: { value: modalType, set: setModalType },
                setModalIsBorrow: {
                  value: modalIsBorrow,
                  set: setModalIsBorrow,
                },
                setModalIsConfirm: {
                  value: modalIsConfirm,
                  set: setModalIsConfirm,
                },
              }}
              borrow={modalIsBorrow}
              confirm={modalIsConfirm}
            />
          )}
        </ModalParent>
      )}
    </>
  );
};

const MuiTableCell = withStyles({
  root: {
    padding: '0px',
    borderBottom: 'none',
  },
})(TableCell);

const ItemTableCell = withStyles({
  root: {
    cursor: 'pointer',
  },
})(MuiTableCell);

const ItemTableRow = withStyles({
  root: {
    cursor: 'pointer',
  },
})(TableRow);

const MuiTableCell1Style = withStyles({
  root: {
    padding: '20px 24px',
    borderBottom: '1px solid #32394d',
  },
})(TableCell);

interface IconProps {
  size?: any;
  color?: any;
}
const USDTIcon: React.FC<IconProps> = ({
  size = '1em',
  color = 'currentColor',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 32'
    >
      <path
        data-name='Path 5433'
        d='M16 32A16 16 0 1 0 0 16a16 16 0 0 0 16 16z'
        fill='#2775c9'
      />
      <path
        data-name='Path 5434'
        d='M15.75 27.5a11.75 11.75 0 1 1 8.309-3.442A11.749 11.749 0 0 1 15.75 27.5zm-.7-16.11a2.58 2.58 0 0 0-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21a1.9 1.9 0 0 1-1.8-.91.68.68 0 0 0-.61-.39h-.59a.35.35 0 0 0-.28.41 2.73 2.73 0 0 0 2.61 2.08v.84a.705.705 0 0 0 1.41 0v-.85a2.62 2.62 0 0 0 2.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14s.6-1.18 1.6-1.18a1.64 1.64 0 0 1 1.59.81.8.8 0 0 0 .72.46h.47a.42.42 0 0 0 .31-.5 2.65 2.65 0 0 0-2.38-2v-.69a.7.7 0 0 0-1.41 0zm-8.11 4.36a8.79 8.79 0 0 0 6 8.33h.14a.45.45 0 0 0 .45-.45v-.21a.94.94 0 0 0-.58-.87 7.36 7.36 0 0 1 0-13.65.93.93 0 0 0 .58-.86v-.23a.42.42 0 0 0-.56-.4 8.79 8.79 0 0 0-6.03 8.34zm17.62 0a8.79 8.79 0 0 0-6-8.32h-.15a.47.47 0 0 0-.47.47v.15a1 1 0 0 0 .61.9 7.36 7.36 0 0 1 0 13.64 1 1 0 0 0-.6.89v.17a.47.47 0 0 0 .62.44 8.79 8.79 0 0 0 5.99-8.34z'
        fill='#fff'
      />
    </svg>
  );
};

export default LendDetailPage;
