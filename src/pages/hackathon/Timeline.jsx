import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import { BsFillMegaphoneFill, BsFillPersonLinesFill, BsFillStarFill, BsPlayCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { IoIosFlame } from 'react-icons/io';
import { MdHowToVote } from 'react-icons/md';
import ProjectQualification from './ProjectQualification';
import ProjectGrading from './ProjectGrading';
import { MdOutlineDoubleArrow } from 'react-icons/md';


export default function Timeline(props) {
    return (
        <VerticalTimeline>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(33, 150, 243, 0.6)' }}
                date="20th October"
                iconStyle={{ background: 'rgba(33, 150, 243, 1)', color: '#fff' }}
                icon={<BsFillMegaphoneFill />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='md'>
                        Hackathon announcement
                    </Heading>
                    <Text align='center'>
                        Comments on schedule and rules of the event, Q&A, opening of silver and gold sponsor NFTs for sale.
                    </Text>
                    <Button 
                        rightIcon={<MdOutlineDoubleArrow />}
                        onClick={() => window.open('https://www.clubhouse.com/event/PY6Rvo7z', '_blank')}
                            colorScheme='blue'
                        >Listen to the replay on Clubhouse</Button>
                </VStack>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 143, 95, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(33, 143, 95, 0.6)' }}
                date="31st October"
                iconStyle={{ background: 'rgba(33, 143, 95, 1)', color: '#fff' }}
                icon={<BsFillPersonLinesFill />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='lg'>
                        Teams and projects
                    </Heading>
                    <Text align='center'>
                        Hackathon is a cross-disciplinary event, so we will help to facilitate opportunities to team up with others and build an amazing hackathon project together.
                    </Text>
                    <Button 
                        rightIcon={<MdOutlineDoubleArrow />}
                        onClick={() => window.open('https://tally.so/r/n0QXGP', '_blank')}
                            color='green.800'
                        >Sign up for the hackathon</Button>
                </VStack>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(224, 108, 0, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(224, 108, 0, 0.6)' }}
                date="1st November"
                iconStyle={{ background: 'rgba(224, 108, 0, 1)', color: '#fff' }}
                icon={<BsPlayCircleFill />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='lg'>
                        Hackathon starts
                    </Heading>
                    <Text align='center'>
                        We will start accepting submissions from participating project teams and qualify them for community voting on a first come, first serve basis.
                    </Text>
                    <ProjectQualification />
                </VStack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(159, 159, 237, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(159, 159, 237, 0.6)' }}
                date="7th November 2022"
                iconStyle={{ background: 'rgba(129, 129, 207, 1)', color: '#fff' }}
                icon={<IoIosFlame />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='lg'>
                        Final call
                    </Heading>
                    <Text align='center'>
                        We will stop accepting new participants into the hackathon and burn all remaining sponsor NFTs.
                    </Text>
                    <Button 
                        rightIcon={<MdOutlineDoubleArrow />}
                        onClick={() => window.open('https://desolabs.nftz.me/', '_blank')}
                            color='purple.800'
                        >Get them while you can!</Button>
                </VStack>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(109, 156, 109, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(109, 156, 109, 0.6)' }}
                date="14th November 2022"
                iconStyle={{ background: 'rgba(109, 156, 109, 1)', color: '#fff' }}
                icon={<MdHowToVote />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='lg'>
                        Community voting starts
                    </Heading>
                    <Text align='center'>
                        Voting on projects starts on a first come first serve basis, no new project teams will be added to the hackathon.
                    </Text>
                    <Button color='green.800'
                        disabled={true}
                        >Voting machine (TBA)</Button>
                </VStack>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(163, 53, 10, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(163, 53, 10, 0.6)' }}
                date="30th November"
                iconStyle={{ background: 'rgba(163, 53, 10, 1)', color: '#fff' }}
                icon={<BsStopwatchFill />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='lg'>
                        Hackathon ends
                    </Heading>
                    <Text align='center'>
                        DeSoLabs crew stops accepting new submissions from participating projects and qualifying them for votes done by the sponsorship NFT owners.
                    </Text>
                    <ProjectGrading />
                </VStack>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(179, 171, 25, 0.6)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(179, 171, 25, 0.6)' }}
                date="2nd December"
                iconStyle={{ background: 'rgba(191, 154, 23, 1)', color: '#fff' }}
                icon={<BsFillStarFill />}
            >
                <VStack spacing='5'>
                    <Heading as='h3' size='lg'>
                        Awards Ceremony
                    </Heading>
                    <Text align='center'>
                        Join us for the CRYPT0WINTER 2022 Community Hackathon awards ceremony to hyp3 the winners in each category!
                    </Text>
                    <Button 
                            color='yellow.800'
                            disabled={true}
                        >Awards event (TBA)</Button>
                </VStack>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    );
}